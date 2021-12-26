// This file is part of RECAP for Chrome.
// Copyright 2013 Ka-Ping Yee <ping@zesty.ca>
//
// RECAP for Chrome is free software: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option)
// any later version.  RECAP for Chrome is distributed in the hope that it will
// be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
// Public License for more details.
//
// You should have received a copy of the GNU General Public License along with
// RECAP for Chrome.  If not, see: http://www.gnu.org/licenses/
// -------------------------------------------------------------------------
// Toolbar button for RECAP (or "browser action" in Chrome parlance).
function getTabById(tabId, cb) {
    chrome.tabs.get(tabId, cb);
}
function updateToolbarButton(tab) {
    // Updates the toolbar button for a tab to reflect the tab's login status.
    let setTitleIcon = function(title, icon) {
        chrome.browserAction.setTitle({
            title: `RECAP: ${title}`
        });
        chrome.browserAction.setIcon({
            path: icon
        });
    };
    chrome.storage.local.get('options', function(items) {
        if (tab === null || tab === undefined) {
            // There's code in Firefox that can be called before the defaults are set
            // and before the tab is even established. Catch that, and handle it or
            // else it can crash things.
            setTitleIcon('RECAP is ready', {
                '19': 'assets/images/grey-19.png',
                '38': 'assets/images/grey-38.png'
            });
            return;
        }
        if ($.isEmptyObject(items)) // Firefox 56 bug. The default settings didn't get created properly when
        // upgrading from the legacy extension. This can be removed when everybody
        // is safely beyond 56 (and the ESR)
        setDefaultOptions({
        });
        if (items && items['options'] && !items['options']['recap_enabled']) setTitleIcon('RECAP is temporarily disabled', {
            '19': 'assets/images/disabled-19.png',
            '38': 'assets/images/disabled-38.png'
        });
        else {
            // Is it a PACER URL?
            let court = PACER.getCourtFromUrl(tab.url);
            if (!court) // Not a PACER URL. Show gray.
            setTitleIcon('Not at a PACER site', {
                '19': 'assets/images/grey-19.png',
                '38': 'assets/images/grey-38.png'
            });
            else if (PACER.isAppellateCourt(court)) // Appellate court. Show warning.
            setTitleIcon('Appellate courts are not supported', {
                '19': 'assets/images/warning-19.png',
                '38': 'assets/images/warning-38.png'
            });
            else // It's a valid PACER URL. Therefore either show the nice blue icon or
            // show the blue icon with a warning, if receipts are disabled.
            chrome.cookies.get({
                url: tab.url,
                name: 'PacerPref'
            }, function(pref_cookie) {
                if (pref_cookie && pref_cookie.value.match(/receipt=N/)) // Receipts are disabled. Show the warning.
                setTitleIcon("Receipts are disabled in your PACER settings", {
                    '19': 'assets/images/warning-19.png',
                    '38': 'assets/images/warning-38.png'
                });
                else // At PACER, and things look good!
                setTitleIcon('Logged in to PACER. RECAP is active.', {
                    '19': 'assets/images/icon-19.png',
                    '38': 'assets/images/icon-38.png'
                });
            });
        }
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBL0QsNkRBQStEO1lBQy9ELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztnQkFDWixJQUFJLEVBQUUsQ0FBVztZQUNuQixDQUFDLEVBQUUsUUFBUSxDQUFFLFdBQVcsRUFBRSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxlQUN4QyxFQUEyQyxBQUEzQyx5Q0FBMkM7Z0JBQzNDLFlBQVksQ0FBQyxDQUE4QywrQ0FBQyxDQUFDO29CQUMzRCxDQUFJLEtBQUUsQ0FBOEI7b0JBQ3BDLENBQUksS0FBRSxDQUE4QjtnQkFDdEMsQ0FBQztxQkFFRCxFQUFrQyxBQUFsQyxnQ0FBa0M7Z0JBQ2xDLFlBQVksQ0FBQyxDQUFzQyx1Q0FBRSxDQUFDO29CQUNwRCxDQUFJLEtBQUUsQ0FBMkI7b0JBQ2pDLENBQUksS0FBRSxDQUEyQjtnQkFDbkMsQ0FBQztZQUVMLENBQUM7UUFHTCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbInNyYy90b29sYmFyX2J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBSRUNBUCBmb3IgQ2hyb21lLlxyXG4vLyBDb3B5cmlnaHQgMjAxMyBLYS1QaW5nIFllZSA8cGluZ0B6ZXN0eS5jYT5cclxuLy9cclxuLy8gUkVDQVAgZm9yIENocm9tZSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0XHJcbi8vIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlXHJcbi8vIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbilcclxuLy8gYW55IGxhdGVyIHZlcnNpb24uICBSRUNBUCBmb3IgQ2hyb21lIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbFxyXG4vLyBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VIEdlbmVyYWxcclxuLy8gUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuLy9cclxuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYWxvbmcgd2l0aFxyXG4vLyBSRUNBUCBmb3IgQ2hyb21lLiAgSWYgbm90LCBzZWU6IGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVG9vbGJhciBidXR0b24gZm9yIFJFQ0FQIChvciBcImJyb3dzZXIgYWN0aW9uXCIgaW4gQ2hyb21lIHBhcmxhbmNlKS5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUYWJCeUlkKHRhYklkLCBjYil7XHJcbiAgY2hyb21lLnRhYnMuZ2V0KHRhYklkLCBjYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvb2xiYXJCdXR0b24odGFiKSB7XHJcbiAgLy8gVXBkYXRlcyB0aGUgdG9vbGJhciBidXR0b24gZm9yIGEgdGFiIHRvIHJlZmxlY3QgdGhlIHRhYidzIGxvZ2luIHN0YXR1cy5cclxuICBsZXQgc2V0VGl0bGVJY29uID0gZnVuY3Rpb24gKHRpdGxlLCBpY29uKSB7XHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRUaXRsZSh7dGl0bGU6IGBSRUNBUDogJHt0aXRsZX1gfSk7XHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtwYXRoOiBpY29ufSk7XHJcbiAgfTtcclxuXHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdvcHRpb25zJywgZnVuY3Rpb24oaXRlbXMpe1xyXG4gICAgaWYgKHRhYiA9PT0gbnVsbCB8fCB0YWIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBUaGVyZSdzIGNvZGUgaW4gRmlyZWZveCB0aGF0IGNhbiBiZSBjYWxsZWQgYmVmb3JlIHRoZSBkZWZhdWx0cyBhcmUgc2V0XHJcbiAgICAgIC8vIGFuZCBiZWZvcmUgdGhlIHRhYiBpcyBldmVuIGVzdGFibGlzaGVkLiBDYXRjaCB0aGF0LCBhbmQgaGFuZGxlIGl0IG9yXHJcbiAgICAgIC8vIGVsc2UgaXQgY2FuIGNyYXNoIHRoaW5ncy5cclxuICAgICAgc2V0VGl0bGVJY29uKCdSRUNBUCBpcyByZWFkeScsIHtcclxuICAgICAgICAnMTknOiAnYXNzZXRzL2ltYWdlcy9ncmV5LTE5LnBuZycsXHJcbiAgICAgICAgJzM4JzogJ2Fzc2V0cy9pbWFnZXMvZ3JleS0zOC5wbmcnXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoJC5pc0VtcHR5T2JqZWN0KGl0ZW1zKSl7XHJcbiAgICAgIC8vIEZpcmVmb3ggNTYgYnVnLiBUaGUgZGVmYXVsdCBzZXR0aW5ncyBkaWRuJ3QgZ2V0IGNyZWF0ZWQgcHJvcGVybHkgd2hlblxyXG4gICAgICAvLyB1cGdyYWRpbmcgZnJvbSB0aGUgbGVnYWN5IGV4dGVuc2lvbi4gVGhpcyBjYW4gYmUgcmVtb3ZlZCB3aGVuIGV2ZXJ5Ym9keVxyXG4gICAgICAvLyBpcyBzYWZlbHkgYmV5b25kIDU2IChhbmQgdGhlIEVTUilcclxuICAgICAgc2V0RGVmYXVsdE9wdGlvbnMoe30pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtcyAmJiBpdGVtc1snb3B0aW9ucyddICYmICFpdGVtc1snb3B0aW9ucyddWydyZWNhcF9lbmFibGVkJ10pe1xyXG4gICAgICBzZXRUaXRsZUljb24oJ1JFQ0FQIGlzIHRlbXBvcmFyaWx5IGRpc2FibGVkJywge1xyXG4gICAgICAgICcxOSc6ICdhc3NldHMvaW1hZ2VzL2Rpc2FibGVkLTE5LnBuZycsXHJcbiAgICAgICAgJzM4JzogJ2Fzc2V0cy9pbWFnZXMvZGlzYWJsZWQtMzgucG5nJ1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElzIGl0IGEgUEFDRVIgVVJMP1xyXG4gICAgICBsZXQgY291cnQgPSBQQUNFUi5nZXRDb3VydEZyb21VcmwodGFiLnVybCk7XHJcbiAgICAgIGlmICghY291cnQpIHtcclxuICAgICAgICAvLyBOb3QgYSBQQUNFUiBVUkwuIFNob3cgZ3JheS5cclxuICAgICAgICBzZXRUaXRsZUljb24oJ05vdCBhdCBhIFBBQ0VSIHNpdGUnLCB7XHJcbiAgICAgICAgICAnMTknOiAnYXNzZXRzL2ltYWdlcy9ncmV5LTE5LnBuZycsXHJcbiAgICAgICAgICAnMzgnOiAnYXNzZXRzL2ltYWdlcy9ncmV5LTM4LnBuZydcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChQQUNFUi5pc0FwcGVsbGF0ZUNvdXJ0KGNvdXJ0KSkge1xyXG4gICAgICAgIC8vIEFwcGVsbGF0ZSBjb3VydC4gU2hvdyB3YXJuaW5nLlxyXG4gICAgICAgIHNldFRpdGxlSWNvbignQXBwZWxsYXRlIGNvdXJ0cyBhcmUgbm90IHN1cHBvcnRlZCcsIHtcclxuICAgICAgICAgICcxOSc6ICdhc3NldHMvaW1hZ2VzL3dhcm5pbmctMTkucG5nJyxcclxuICAgICAgICAgICczOCc6ICdhc3NldHMvaW1hZ2VzL3dhcm5pbmctMzgucG5nJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEl0J3MgYSB2YWxpZCBQQUNFUiBVUkwuIFRoZXJlZm9yZSBlaXRoZXIgc2hvdyB0aGUgbmljZSBibHVlIGljb24gb3JcclxuICAgICAgICAvLyBzaG93IHRoZSBibHVlIGljb24gd2l0aCBhIHdhcm5pbmcsIGlmIHJlY2VpcHRzIGFyZSBkaXNhYmxlZC5cclxuICAgICAgICBjaHJvbWUuY29va2llcy5nZXQoe1xyXG4gICAgICAgICAgdXJsOiB0YWIudXJsLFxyXG4gICAgICAgICAgbmFtZTogJ1BhY2VyUHJlZidcclxuICAgICAgICB9LCBmdW5jdGlvbiAocHJlZl9jb29raWUpIHtcclxuICAgICAgICAgIGlmIChwcmVmX2Nvb2tpZSAmJiBwcmVmX2Nvb2tpZS52YWx1ZS5tYXRjaCgvcmVjZWlwdD1OLykpIHtcclxuICAgICAgICAgICAgLy8gUmVjZWlwdHMgYXJlIGRpc2FibGVkLiBTaG93IHRoZSB3YXJuaW5nLlxyXG4gICAgICAgICAgICBzZXRUaXRsZUljb24oXCJSZWNlaXB0cyBhcmUgZGlzYWJsZWQgaW4geW91ciBQQUNFUiBzZXR0aW5nc1wiLHtcclxuICAgICAgICAgICAgICAnMTknOiAnYXNzZXRzL2ltYWdlcy93YXJuaW5nLTE5LnBuZycsXHJcbiAgICAgICAgICAgICAgJzM4JzogJ2Fzc2V0cy9pbWFnZXMvd2FybmluZy0zOC5wbmcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQXQgUEFDRVIsIGFuZCB0aGluZ3MgbG9vayBnb29kIVxyXG4gICAgICAgICAgICBzZXRUaXRsZUljb24oJ0xvZ2dlZCBpbiB0byBQQUNFUi4gUkVDQVAgaXMgYWN0aXZlLicsIHtcclxuICAgICAgICAgICAgICAnMTknOiAnYXNzZXRzL2ltYWdlcy9pY29uLTE5LnBuZycsXHJcbiAgICAgICAgICAgICAgJzM4JzogJ2Fzc2V0cy9pbWFnZXMvaWNvbi0zOC5wbmcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJvcHRpb25zLjIwZTAwNDRmLmpzLm1hcCJ9
