"use strict";var e=document.querySelector(".modal__form"),t=document.querySelectorAll(".input"),o=document.querySelector("#input-name"),r=document.querySelector("#input-email"),n=document.querySelector("#textarea"),s=document.querySelector("#label-name"),l=document.querySelector("#label-email"),a=document.querySelector("#modal-btn"),c=!1;e.onsubmit=function(){var e=o.value,n=r.value,i=Array.from(t).filter((function(e){return""===e.value}));return t.forEach((function(e){""===e.value?(e.classList.add("error"),a.textContent="Fill in required fields",c=!0):(e.classList.remove("error"),a.textContent="SUBMIT")})),0===i.length&&(/^[A-Za-z\ ]{2,80}$/.test(String(e))?(o.classList.remove("error"),s.textContent="Full Name",c=!1,/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(String(n).toLowerCase())?(r.classList.remove("error"),l.textContent="Email",void(c=!1)):(r.classList.add("error"),l.textContent="Enter Email in the form **@**.**",c=!0,!1)):(o.classList.add("error"),s.textContent="Enter at least 2 letters",c=!0,!1))},e.addEventListener("submit",(function(e){e.preventDefault(),1!=c&&function(){var e=encodeURIComponent(o.value),t=encodeURIComponent(r.value),s=encodeURIComponent(n.value),l="Имя="+e+"&Email="+t+"&Message"+s,a=new XMLHttpRequest;function c(){d.classList.remove("form-message-visible")}a.open("POST","https://jsonplaceholder.typicode.com/posts"),a.responseType="text",a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(l),a.onload=function(){if(200!==a.status)return i.classList.remove("modal_visible"),d.classList.add("form-message-visible"),setTimeout(c,5e3),void u.classList.remove("body-noscroll")}}()})),e.addEventListener("submit",(function(e){e.preventDefault()}));var i=document.querySelector("#modal"),d=document.querySelector(".form-message"),u=document.querySelector("body");var m=document.querySelector("#open-modal"),v=document.querySelector("#modal-close"),y=(i=document.querySelector("#modal"),document.querySelector("#modal-shadow"));u=document.querySelector("body");m.addEventListener("click",(function(){i.classList.add("modal_visible"),u.classList.add("body-noscroll")})),v.addEventListener("click",(function(){i.classList.remove("modal_visible"),u.classList.remove("body-noscroll")})),y.addEventListener("click",(function(){i.classList.remove("modal_visible"),u.classList.remove("body-noscroll")}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJtb2RhbC5qcyJdLCJuYW1lcyI6WyJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9ybUlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRNZXNzYWdlIiwibmFtZVRpdGxlIiwiZW1haWxUaXRsZSIsImJ0blRpdGxlIiwiZXJyb3IiLCJvbnN1Ym1pdCIsIm5hbWVWYWwiLCJ2YWx1ZSIsImVtYWlsVmFsIiwiZW1wdHlJbnB1dHMiLCJBcnJheSIsImZyb20iLCJmaWx0ZXIiLCJpbnB1dCIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsImxlbmd0aCIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbmNvZGVOYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlRW1haWwiLCJlbmNvZGVNZXNzYWdlIiwiZm9ybURhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIk1lc3NhZ2VQb3BhcCIsImZvcm1NZXNzYWdlIiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwib25sb2FkIiwic3RhdHVzIiwibW9kYWxXaW5kb3ciLCJzZXRUaW1lb3V0IiwicHJpbWFyeVdpbmRvdyIsInNlbmRGb3JtIiwiZXZlbnQiLCJtb2RhbE9wZW4iLCJtb2RhbENsb3NlIiwibW9kYWxTaGFkb3ciXSwibWFwcGluZ3MiOiJhQUFBLElBQU1BLEVBQU9DLFNBQVNDLGNBQWMsZ0JBQzlCQyxFQUFhRixTQUFTRyxpQkFBaUIsVUFDdkNDLEVBQVlKLFNBQVNDLGNBQWMsZUFDbkNJLEVBQWFMLFNBQVNDLGNBQWMsZ0JBQ3BDSyxFQUFlTixTQUFTQyxjQUFjLGFBQ3RDTSxFQUFZUCxTQUFTQyxjQUFjLGVBQ25DTyxFQUFhUixTQUFTQyxjQUFjLGdCQUNwQ1EsRUFBV1QsU0FBU0MsY0FBYyxjQUNwQ1MsR0FBUSxFQVlaWCxFQUFLWSxTQUFXLFdBQ2QsSUFBTUMsRUFBVVIsRUFBVVMsTUFDcEJDLEVBQVdULEVBQVdRLE1BQ3RCRSxFQUFjQyxNQUFNQyxLQUFLZixHQUFZZ0IsUUFBTyxTQUFBQyxHQUFLLE1BQW9CLEtBQWhCQSxFQUFNTixTQWFqRSxPQVhBWCxFQUFXa0IsU0FBUSxTQUFTRCxHQUNOLEtBQWhCQSxFQUFNTixPQUNSTSxFQUFNRSxVQUFVQyxJQUFJLFNBQ3BCYixFQUFTYyxZQUFjLDBCQUN2QmIsR0FBUSxJQUVSUyxFQUFNRSxVQUFVRyxPQUFPLFNBQ3ZCZixFQUFTYyxZQUFjLGFBSUEsSUFBdkJSLEVBQVlVLFNBekJDLHFCQUNEQyxLQUFLQyxPQTRCSGYsS0FNaEJSLEVBQVVpQixVQUFVRyxPQUFPLFNBQzNCakIsRUFBVWdCLFlBQWMsWUFDeEJiLEdBQVEsRUFoQ1EsaURBQ0RnQixLQUFLQyxPQWtDSGIsR0FsQ2lCYyxnQkF3Q2xDdkIsRUFBV2dCLFVBQVVHLE9BQU8sU0FDNUJoQixFQUFXZSxZQUFjLGFBQ3pCYixHQUFRLEtBUFJMLEVBQVdnQixVQUFVQyxJQUFJLFNBQ3pCZCxFQUFXZSxZQUFjLG1DQUN6QmIsR0FBUSxHQUNELEtBZFBOLEVBQVVpQixVQUFVQyxJQUFJLFNBQ3hCZixFQUFVZ0IsWUFBYywyQkFDeEJiLEdBQVEsR0FDRCxLQW1CWFgsRUFBSzhCLGlCQUFpQixVQUFVLFNBQUNDLEdBQy9CQSxFQUFFQyxpQkFDVyxHQUFUckIsR0FhTixXQUNFLElBQU1zQixFQUFhQyxtQkFBbUI3QixFQUFVUyxPQUMxQ3FCLEVBQWNELG1CQUFtQjVCLEVBQVdRLE9BQzVDc0IsRUFBZ0JGLG1CQUFtQjNCLEVBQWFPLE9BRWhEdUIsRUFBWSxPQUFTSixFQUFhLFVBQVlFLEVBQWMsV0FBYUMsRUFDekVFLEVBQU0sSUFBSUMsZUFlaEIsU0FBU0MsSUFDUEMsRUFBWW5CLFVBQVVHLE9BQU8sd0JBZi9CYSxFQUFJSSxLQUFLLE9BQVEsOENBQ2pCSixFQUFJSyxhQUFlLE9BQ25CTCxFQUFJTSxpQkFBaUIsZUFBZ0IscUNBQ3JDTixFQUFJTyxLQUFLUixHQUNUQyxFQUFJUSxPQUFTLFdBQ1gsR0FBbUIsTUFBZlIsRUFBSVMsT0FLTixPQUpBQyxFQUFZMUIsVUFBVUcsT0FBTyxpQkFDN0JnQixFQUFZbkIsVUFBVUMsSUFBSSx3QkFDMUIwQixXQUFXVCxFQUFjLFVBQ3pCVSxFQUFjNUIsVUFBVUcsT0FBTyxrQkE1QmpDMEIsTUFNSm5ELEVBQUs4QixpQkFBaUIsVUFGdEIsU0FBb0JzQixHQUNsQkEsRUFBTXBCLG9CQUdSLElBQU1nQixFQUFjL0MsU0FBU0MsY0FBYyxVQUNyQ3VDLEVBQWN4QyxTQUFTQyxjQUFjLGlCQUNyQ2dELEVBQWdCakQsU0FBU0MsY0FBYyxRQzNFM0MsSUFBTW1ELEVBQVlwRCxTQUFTQyxjQUFjLGVBQ3pDb0QsRUFBYXJELFNBQVNDLGNBQWMsZ0JBRXBDcUQsR0FEQVAsRUFBYy9DLFNBQVNDLGNBQWMsVUFDdkJELFNBQVNDLGNBQWMsa0JBQ3JDZ0QsRUFBZ0JqRCxTQUFTQyxjQUFjLFFBRXpDbUQsRUFBVXZCLGlCQUFpQixTQUFTLFdBQ3BDa0IsRUFBWTFCLFVBQVVDLElBQUksaUJBQzFCMkIsRUFBYzVCLFVBQVVDLElBQUksb0JBRzVCK0IsRUFBV3hCLGlCQUFpQixTQUFTLFdBQ3JDa0IsRUFBWTFCLFVBQVVHLE9BQU8saUJBQzdCeUIsRUFBYzVCLFVBQVVHLE9BQU8sb0JBRy9COEIsRUFBWXpCLGlCQUFpQixTQUFTLFdBQ3RDa0IsRUFBWTFCLFVBQVVHLE9BQU8saUJBQzdCeUIsRUFBYzVCLFVBQVVHLE9BQU8iLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZm9ybScpLFxuICAgICAgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpLFxuICAgICAgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5hbWUnKSxcbiAgICAgIGlucHV0RW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtZW1haWwnKSxcbiAgICAgIGlucHV0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0YXJlYScpLFxuICAgICAgbmFtZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsLW5hbWUnKSxcbiAgICAgIGVtYWlsVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWwtZW1haWwnKSxcbiAgICAgIGJ0blRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWJ0bicpO1xubGV0IGVycm9yID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVSdWxlID0gL15bQS1aYS16XFwgXXsyLDgwfSQvO1xuICByZXR1cm4gbmFtZVJ1bGUudGVzdChTdHJpbmcobmFtZSkpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgY29uc3QgZW1haWxSdWxlID0gL15bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aXXsyLH0kLztcbiAgcmV0dXJuIGVtYWlsUnVsZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSlcbn1cblxuZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbmFtZVZhbCA9IGlucHV0TmFtZS52YWx1ZSxcbiAgICAgICAgZW1haWxWYWwgPSBpbnB1dEVtYWlsLnZhbHVlLFxuICAgICAgICBlbXB0eUlucHV0cyA9IEFycmF5LmZyb20oZm9ybUlucHV0cykuZmlsdGVyKGlucHV0ID0+IGlucHV0LnZhbHVlID09PSAnJyk7XG5cbiAgZm9ybUlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgYnRuVGl0bGUudGV4dENvbnRlbnQgPSAnRmlsbCBpbiByZXF1aXJlZCBmaWVsZHMnXG4gICAgICBlcnJvciA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKVxuICAgICAgYnRuVGl0bGUudGV4dENvbnRlbnQgPSAnU1VCTUlUJ1xuICAgIH1cbiAgfSlcblxuICBpZiAoZW1wdHlJbnB1dHMubGVuZ3RoICE9PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoIXZhbGlkYXRlTmFtZShuYW1lVmFsKSkge1xuICAgIGlucHV0TmFtZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgbmFtZVRpdGxlLnRleHRDb250ZW50ID0gJ0VudGVyIGF0IGxlYXN0IDIgbGV0dGVycydcbiAgICBlcnJvciA9IHRydWVcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICBpbnB1dE5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKVxuICAgIG5hbWVUaXRsZS50ZXh0Q29udGVudCA9ICdGdWxsIE5hbWUnXG4gICAgZXJyb3IgPSBmYWxzZVxuICB9XG5cbiAgaWYgKCF2YWxpZGF0ZUVtYWlsKGVtYWlsVmFsKSkge1xuICAgIGlucHV0RW1haWwuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgIGVtYWlsVGl0bGUudGV4dENvbnRlbnQgPSAnRW50ZXIgRW1haWwgaW4gdGhlIGZvcm0gKipAKiouKionXG4gICAgZXJyb3IgPSB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgaW5wdXRFbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpXG4gICAgZW1haWxUaXRsZS50ZXh0Q29udGVudCA9ICdFbWFpbCdcbiAgICBlcnJvciA9IGZhbHNlXG4gIH1cbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChlcnJvciAhPSB0cnVlKSB7XG4gICAgc2VuZEZvcm0oKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfVxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtKTtcblxuY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKSxcbiAgICAgIGZvcm1NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbWVzc2FnZScpLFxuICAgICAgcHJpbWFyeVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuZnVuY3Rpb24gc2VuZEZvcm0oKSB7XG4gIGNvbnN0IGVuY29kZU5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoaW5wdXROYW1lLnZhbHVlKSxcbiAgICAgICAgZW5jb2RlRW1haWwgPSBlbmNvZGVVUklDb21wb25lbnQoaW5wdXRFbWFpbC52YWx1ZSksXG4gICAgICAgIGVuY29kZU1lc3NhZ2UgPSBlbmNvZGVVUklDb21wb25lbnQoaW5wdXRNZXNzYWdlLnZhbHVlKVxuXG4gIGNvbnN0IGZvcm1EYXRhID0gICfQmNC80Y89JyArIGVuY29kZU5hbWUgKyBcIiZFbWFpbD1cIiArIGVuY29kZUVtYWlsICsgJyZNZXNzYWdlJyArIGVuY29kZU1lc3NhZ2U7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignUE9TVCcsICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgIGlmICh4aHIuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX3Zpc2libGUnKTtcbiAgICAgIGZvcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbWVzc2FnZS12aXNpYmxlJyk7XG4gICAgICBzZXRUaW1lb3V0KE1lc3NhZ2VQb3BhcCwgNTAwMClcbiAgICAgIHByaW1hcnlXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1ub3Njcm9sbCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIE1lc3NhZ2VQb3BhcCAoKSB7XG4gICAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1tZXNzYWdlLXZpc2libGUnKVxuICB9XG59XG4iLCJcbiAgY29uc3QgbW9kYWxPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbW9kYWwnKSxcbiAgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jbG9zZScpLFxuICBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpLFxuICBtb2RhbFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zaGFkb3cnKSxcbiAgcHJpbWFyeVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxubW9kYWxPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5tb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbF92aXNpYmxlJylcbnByaW1hcnlXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYm9keS1ub3Njcm9sbCcpXG59KVxuXG5tb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5tb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF92aXNpYmxlJylcbnByaW1hcnlXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1ub3Njcm9sbCcpXG59KVxuXG5tb2RhbFNoYWRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xubW9kYWxXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfdmlzaWJsZScpXG5wcmltYXJ5V2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHktbm9zY3JvbGwnKVxufSlcbiJdfQ==
