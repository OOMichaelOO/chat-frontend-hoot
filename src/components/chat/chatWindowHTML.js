module.exports = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="utf-8">\n' +
    '    <!--  This file has been downloaded from bootdey.com @bootdey on twitter -->\n' +
    '    <!--  All snippets are MIT license http://bootdey.com/license -->\n' +
    '    <title>chat app - Bootdey.com</title>\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '\t<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>\n' +
    '    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet">\n' +
    '\t<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>\n' +
    '</head>\n' +
    '<body>\n' +
    '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />\n' +
    '\n' +
    '<div class="container">\n' +
    '<div class="row clearfix">\n' +
    '    <div class="col-lg-12">\n' +
    '        <div class="card chat-app">\n' +
    '            <div id="plist" class="people-list">\n' +
    '                <div class="input-group">\n' +
    '                    <button type="button" class="btn btn-primary">Create new Room</button>\n' +
    '                </div>\n' +
    '                <ul class="list-unstyled chat-list mt-2 mb-0">\n' +
    '                    <li class="clearfix">\n' +
    '                        <img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/109-slack-128.png" alt="avatar">\n' +
    '                        <div class="about">\n' +
    '                            <div class="name">Public Room 1</div>\n' +
    '                            <div class="status"> <i class="fa fa-circle offline"></i> active 7 mins ago </div>\n' +
    '                        </div>\n' +
    '                    </li>\n' +
    '                    <li class="clearfix active">\n' +
    '                        <img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/109-slack-128.png" alt="avatar">\n' +
    '                        <div class="about">\n' +
    '                            <div class="name">Public Room 2</div>\n' +
    '                            <div class="status"> <i class="fa fa-circle online"></i> active </div>\n' +
    '                        </div>\n' +
    '                    </li>\n' +
    '                    <li class="clearfix">\n' +
    '                        <img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/109-slack-128.png" alt="avatar">\n' +
    '                        <div class="about">\n' +
    '                            <div class="name">Public Room 3</div>\n' +
    '                            <div class="status"> <i class="fa fa-circle online"></i> active </div>\n' +
    '                        </div>\n' +
    '                    </li>                                    \n' +
    '                    <li class="clearfix">\n' +
    '                        <img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/109-slack-128.png" alt="avatar">\n' +
    '                        <div class="about">\n' +
    '                            <div class="name">Public Room 4</div>\n' +
    '                            <div class="status"> <i class="fa fa-circle offline"></i> active 10 hours ago </div>\n' +
    '                        </div>\n' +
    '                    </li>\n' +
    '                    <li class="clearfix">\n' +
    '                        <img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/109-slack-128.png" alt="avatar">\n' +
    '                        <div class="about">\n' +
    '                            <div class="name">Public Room 5</div>\n' +
    '                            <div class="status"> <i class="fa fa-circle online"></i> active </div>\n' +
    '                        </div>\n' +
    '                    </li>\n' +
    '                    <li class="clearfix">\n' +
    '                        <img src="https://media.istockphoto.com/vectors/lock-icon-vector-id936681148?k=20&m=936681148&s=612x612&w=0&h=j6fxNWrJ09iE7khUsDWetKn_PwWydgIS0yFJBEonGow=" alt="avatar">\n' +
    '                        <div class="about">\n' +
    '                            <div class="name">Private Room 1</div>\n' +
    '                            <div class="status"> <i class="fa fa-circle offline"></i> active since Oct 28 </div>\n' +
    '                        </div>\n' +
    '                    </li>\n' +
    '                    <li class="li4">\n' +
    '                        <button type="button" class="btn btn-primary">Leave all</button>\n' +
    '                        <button type="button" class="btn btn-secondary">Available</button>\n' +
    '                    </li>\n' +
    '\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '            <div class="chat">\n' +
    '                <div class="chat-header clearfix">\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-lg-6">\n' +
    '                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">\n' +
    '                                <img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/109-slack-128.png" alt="avatar">\n' +
    '                            </a>\n' +
    '                            <div class="chat-about">\n' +
    '                                <h6 class="m-b-0">Public Room 1</h6>\n' +
    '                                <small>active</small>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="col-lg-6 hidden-sm text-right">\n' +
    '                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>\n' +
    '                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-sign-out" aria-hidden="true"></i></a>\n' +
    '                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-times" aria-hidden="true"></i></a>\n' +
    '                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-plus" aria-hidden="true"></i></a>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="chat-history">\n' +
    '                    <ul class="m-b-0">\n' +
    '                        <li class="clearfix">\n' +
    '                            <div class="message-data text-right">\n' +
    '                                <span class="message-data-time">10:10 AM, Today</span>\n' +
    '                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">\n' +
    '                            </div>\n' +
    '                            <div class="message other-message float-right"> What\'s up! </div>\n' +
    '                        </li>\n' +
    '                        <li class="clearfix">\n' +
    '                            <div class="message-data">\n' +
    '                                <img src="https://t4.ftcdn.net/jpg/02/91/45/39/240_F_291453953_sR3vaTlxA022LtxovSOnnO4sW5VX5mto.jpg" alt="avatar">\n' +
    '                                <span class="message-data-time">10:12 AM, Today</span>\n' +
    '                            </div>\n' +
    '                            <div class="message my-message">What\'s up!</div>\n' +
    '                        </li>                               \n' +
    '                        <li class="clearfix">\n' +
    '                            <div class="message-data">\n' +
    '                                <img src="https://t4.ftcdn.net/jpg/04/11/54/13/240_F_411541348_3TasepXm4gcWoqYd3fO8jtxfhSu1DUh6.jpg" alt="avatar">\n' +
    '                                <span class="message-data-time">10:15 AM, Today</span>\n' +
    '                            </div>\n' +
    '                            <div class="message my-message">What\'s up What\'s up!</div>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '                <div class="chat-message clearfix">\n' +
    '                    <div class="input-group mb-0">\n' +
    '                        <div class="input-group-prepend">\n' +
    '                            <span class="input-group-text"><i class="fa fa-send"></i></span>\n' +
    '                        </div>\n' +
    '                        <input type="text" class="form-control" placeholder="Enter whaz up here...">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    '\n' +
    '<style type="text/css">\n' +
    'body{\n' +
    '    background-color: #f4f7f6;\n' +
    '    margin-top:20px;\n' +
    '}\n' +
    '.card {\n' +
    '    background: #fff;\n' +
    '    transition: .5s;\n' +
    '    border: 0;\n' +
    '    margin-bottom: 30px;\n' +
    '    border-radius: .55rem;\n' +
    '    position: relative;\n' +
    '    width: 100%;\n' +
    '    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);\n' +
    '}\n' +
    '.chat-app .people-list {\n' +
    '    width: 280px;\n' +
    '    position: absolute;\n' +
    '    left: 0;\n' +
    '    top: 0;\n' +
    '    padding: 20px;\n' +
    '    z-index: 7\n' +
    '}\n' +
    '\n' +
    '.chat-app .chat {\n' +
    '    margin-left: 280px;\n' +
    '    border-left: 1px solid #eaeaea\n' +
    '}\n' +
    '\n' +
    '.people-list {\n' +
    '    -moz-transition: .5s;\n' +
    '    -o-transition: .5s;\n' +
    '    -webkit-transition: .5s;\n' +
    '    transition: .5s\n' +
    '}\n' +
    '\n' +
    '.people-list .chat-list li {\n' +
    '    padding: 10px 15px;\n' +
    '    list-style: none;\n' +
    '    border-radius: 3px\n' +
    '}\n' +
    '\n' +
    '.people-list .chat-list li:hover {\n' +
    '    background: #efefef;\n' +
    '    cursor: pointer\n' +
    '}\n' +
    '\n' +
    '.people-list .chat-list li.active {\n' +
    '    background: #efefef\n' +
    '}\n' +
    '\n' +
    '.people-list .chat-list li .name {\n' +
    '    font-size: 15px\n' +
    '}\n' +
    '\n' +
    '.people-list .chat-list img {\n' +
    '    width: 45px;\n' +
    '    border-radius: 50%\n' +
    '}\n' +
    '\n' +
    '.people-list img {\n' +
    '    float: left;\n' +
    '    border-radius: 50%\n' +
    '}\n' +
    '\n' +
    '.people-list .about {\n' +
    '    float: left;\n' +
    '    padding-left: 8px\n' +
    '}\n' +
    '\n' +
    '.people-list .status {\n' +
    '    color: #999;\n' +
    '    font-size: 13px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-header {\n' +
    '    padding: 15px 20px;\n' +
    '    border-bottom: 2px solid #f4f7f6\n' +
    '}\n' +
    '\n' +
    '.chat .chat-header img {\n' +
    '    float: left;\n' +
    '    border-radius: 40px;\n' +
    '    width: 40px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-header .chat-about {\n' +
    '    float: left;\n' +
    '    padding-left: 10px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history {\n' +
    '    padding: 20px;\n' +
    '    border-bottom: 2px solid #fff\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history ul {\n' +
    '    padding: 0\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history ul li {\n' +
    '    list-style: none;\n' +
    '    margin-bottom: 30px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history ul li:last-child {\n' +
    '    margin-bottom: 0px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .message-data {\n' +
    '    margin-bottom: 15px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .message-data img {\n' +
    '    border-radius: 40px;\n' +
    '    width: 40px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .message-data-time {\n' +
    '    color: #434651;\n' +
    '    padding-left: 6px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .message {\n' +
    '    color: #444;\n' +
    '    padding: 18px 20px;\n' +
    '    line-height: 26px;\n' +
    '    font-size: 16px;\n' +
    '    border-radius: 7px;\n' +
    '    display: inline-block;\n' +
    '    position: relative\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .message:after {\n' +
    '    bottom: 100%;\n' +
    '    left: 7%;\n' +
    '    border: solid transparent;\n' +
    '    content: " ";\n' +
    '    height: 0;\n' +
    '    width: 0;\n' +
    '    position: absolute;\n' +
    '    pointer-events: none;\n' +
    '    border-bottom-color: #fff;\n' +
    '    border-width: 10px;\n' +
    '    margin-left: -10px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .my-message {\n' +
    '    background: #efefef\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .my-message:after {\n' +
    '    bottom: 100%;\n' +
    '    left: 30px;\n' +
    '    border: solid transparent;\n' +
    '    content: " ";\n' +
    '    height: 0;\n' +
    '    width: 0;\n' +
    '    position: absolute;\n' +
    '    pointer-events: none;\n' +
    '    border-bottom-color: #efefef;\n' +
    '    border-width: 10px;\n' +
    '    margin-left: -10px\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .other-message {\n' +
    '    background: #e8f1f3;\n' +
    '    text-align: right\n' +
    '}\n' +
    '\n' +
    '.chat .chat-history .other-message:after {\n' +
    '    border-bottom-color: #e8f1f3;\n' +
    '    left: 93%\n' +
    '}\n' +
    '\n' +
    '.chat .chat-message {\n' +
    '    padding: 20px\n' +
    '}\n' +
    '\n' +
    '.online,\n' +
    '.offline,\n' +
    '.me {\n' +
    '    margin-right: 2px;\n' +
    '    font-size: 8px;\n' +
    '    vertical-align: middle\n' +
    '}\n' +
    '\n' +
    '.online {\n' +
    '    color: #86c541\n' +
    '}\n' +
    '\n' +
    '.offline {\n' +
    '    color: #e47297\n' +
    '}\n' +
    '\n' +
    '.me {\n' +
    '    color: #1d8ecd\n' +
    '}\n' +
    '\n' +
    '.float-right {\n' +
    '    float: right\n' +
    '}\n' +
    '\n' +
    '.clearfix:after {\n' +
    '    visibility: hidden;\n' +
    '    display: block;\n' +
    '    font-size: 0;\n' +
    '    content: " ";\n' +
    '    clear: both;\n' +
    '    height: 0\n' +
    '}\n' +
    '\n' +
    '@media only screen and (max-width: 767px) {\n' +
    '    .chat-app .people-list {\n' +
    '        height: 465px;\n' +
    '        width: 100%;\n' +
    '        overflow-x: auto;\n' +
    '        background: #fff;\n' +
    '        left: -400px;\n' +
    '        display: none\n' +
    '    }\n' +
    '    .chat-app .people-list.open {\n' +
    '        left: 0\n' +
    '    }\n' +
    '    .chat-app .chat {\n' +
    '        margin: 0\n' +
    '    }\n' +
    '    .chat-app .chat .chat-header {\n' +
    '        border-radius: 0.55rem 0.55rem 0 0\n' +
    '    }\n' +
    '    .chat-app .chat-history {\n' +
    '        height: 300px;\n' +
    '        overflow-x: auto\n' +
    '    }\n' +
    '\n' +
    '\n' +
    '}\n' +
    '\n' +
    '@media only screen and (min-width: 768px) and (max-width: 992px) {\n' +
    '    .chat-app .chat-list {\n' +
    '        height: 650px;\n' +
    '        overflow-x: auto\n' +
    '    }\n' +
    '    .chat-app .chat-history {\n' +
    '        height: 600px;\n' +
    '        overflow-x: auto\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {\n' +
    '    .chat-app .chat-list {\n' +
    '        height: 480px;\n' +
    '        overflow-x: auto\n' +
    '    }\n' +
    '    .chat-app .chat-history {\n' +
    '        height: calc(100vh - 350px);\n' +
    '        overflow-x: auto\n' +
    '    }\n' +
    '}\n' +
    '</style>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '\n' +
    '</script>\n' +
    '</body>\n' +
    '</html>'