import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var include:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    include('js/superfish.js');

    var o = $('.sf-menu-toggle');
    if (o.length > 0) {
        $(document).ready(function () {
            var n = $('.nav');
            o.click(function () {
                n.toggleClass('active');
                return false;
            });

            $(document).click(function (e) {
                if (n.hasClass('active')) {
                    var target = e.clientX;
                    if (target > (n.width())) {
                        n.removeClass('active');
                    }
                }
            });
        });
    } else {
        include('js/jquery.mobilemenu.js');
    }
  }

}
