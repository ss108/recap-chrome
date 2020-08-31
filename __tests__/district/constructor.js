import { ContentDelegate } from '../../src/district';
import { tabId, setupChromeSpy, removeChromeSpy } from './mocks';

describe('The ContentDelegate class', () => {
  describe('ContentDelegate constructor', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
    });
    afterEach(() => {
      jest.clearAllMocks();
      fetchMock.mockClear();
    });

    const expected_url = 'https://ecf.canb.uscourts.gov/cgi-bin/DktRpt.pl?531591';
    const restricted_url = 'https://ecf.canb.uscourts.gov/doc1/04503837920';
    const expected_path = '/cgi-bin/DktRpt.pl?531591';
    const expected_court = 'canb';
    const expected_pacer_case_id = '531591';
    const expected_pacer_doc_id = '127015406472';
    const link_0 = document.createElement('a');
    link_0.href = 'http://foo/bar/0';
    const link_1 = document.createElement('a');
    link_1.href = 'http://foo/bar/1';
    const expected_links = [link_0, link_1];
    const expected_tabId = 1234;

    it('gets created with necessary arguments', () => {
      const cd = new ContentDelegate(
        tabId,
        expected_url,
        expected_path,
        expected_court,
        expected_pacer_case_id,
        expected_pacer_doc_id,
        expected_links
      );
      expect(cd.tabId).toBe(expected_tabId);
      expect(cd.url).toBe(expected_url);
      expect(cd.path).toBe(expected_path);
      expect(cd.court).toBe(expected_court);
      expect(cd.pacer_case_id).toBe(expected_pacer_case_id);
      expect(cd.pacer_doc_id).toBe(expected_pacer_doc_id);
      expect(cd.links).toEqual(expected_links);
      expect(cd.restricted).toBe(false);
    });

    it('should flag restriction for Warning!', () => {
      const form = document.createElement('form');
      const input = document.createElement('input');
      input.value = 'View Document';
      form.appendChild(input);
      document.body.appendChild(form);

      const table = document.createElement('table');
      const table_tr = document.createElement('tr');
      const table_td = document.createElement('td');
      table.appendChild(table_tr);
      table_tr.appendChild(table_td);
      document.body.appendChild(table);
      table_td.textContent = 'Warning! Image';

      expect(document.body.innerHTML).not.toContain('will not be uploaded');

      const cd = new ContentDelegate(
        tabId,
        restricted_url,
        expected_path,
        expected_court,
        expected_pacer_case_id,
        expected_pacer_doc_id,
        expected_links
      );
      expect(cd.restricted).toBe(true);
      expect(document.body.innerHTML).toContain('will not be uploaded');
      table.remove();
      form.remove();
    });

    it('should flag restriction for bold restriction', () => {
      const form = document.createElement('form');
      const input = document.createElement('input');
      input.value = 'View Document';
      form.appendChild(input);
      document.body.appendChild(form);

      const table_td = document.createElement('td');
      document.body.appendChild(table_td);
      table_td.textContent = 'Image';

      const paragraph = document.createElement('p');
      const bold = document.createElement('b');
      paragraph.appendChild(bold);
      document.body.appendChild(paragraph);
      bold.textContent = 'SEALED';

      expect(document.body.innerHTML).not.toContain('will not be uploaded');
      const cd = new ContentDelegate(
        tabId,
        restricted_url,
        expected_path,
        expected_court,
        expected_pacer_case_id,
        expected_pacer_doc_id,
        expected_links
      );
      expect(cd.restricted).toBe(true);
      expect(document.body.innerHTML).toContain('will not be uploaded');
      paragraph.remove();
      form.remove();
    });
  });
});
