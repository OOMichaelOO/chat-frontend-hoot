module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n" +
    "<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n" +
    "<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n" +
    "<!------ Include the above in your HEAD tag ---------->\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6 col-md-offset-3\">\n" +
    "            <div class=\"panel panel-login\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-6\">\n" +
    "                            <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-6\">\n" +
    "                            <a href=\"#\" id=\"register-form-link\">Register</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-lg-12\">\n" +
    "                            <form id=\"login-form\" action=\"https://phpoll.com/login/process\" method=\"post\" role=\"form\" style=\"display: block;\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group text-center\">\n" +
    "                                    <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n" +
    "                                    <label for=\"remember\"> Remember Me</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "                                            <input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"col-lg-12\">\n" +
    "                                            <div class=\"text-center\">\n" +
    "                                                <a href=\"https://phpoll.com/recover\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                            <form id=\"register-form\" action=\"https://phpoll.com/register/process\" method=\"post\" role=\"form\" style=\"display: none;\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input type=\"email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "                                            <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "    $(function() {\n" +
    "\n" +
    "        $('#login-form-link').click(function(e) {\n" +
    "            $(\"#login-form\").delay(100).fadeIn(100);\n" +
    "            $(\"#register-form\").fadeOut(100);\n" +
    "            $('#register-form-link').removeClass('active');\n" +
    "            $(this).addClass('active');\n" +
    "            e.preventDefault();\n" +
    "        });\n" +
    "        $('#register-form-link').click(function(e) {\n" +
    "            $(\"#register-form\").delay(100).fadeIn(100);\n" +
    "            $(\"#login-form\").fadeOut(100);\n" +
    "            $('#login-form-link').removeClass('active');\n" +
    "            $(this).addClass('active');\n" +
    "            e.preventDefault();\n" +
    "        });\n" +
    "\n" +
    "    });\n" +
    "</script>\n" +
    "\n" +
    "<style>\n" +
    "    body {\n" +
    "        padding-top: 90px;\n" +
    "    }\n" +
    "    .panel-login {\n" +
    "        border-color: #ccc;\n" +
    "        -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n" +
    "        -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n" +
    "        box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n" +
    "    }\n" +
    "    .panel-login>.panel-heading {\n" +
    "        color: #00415d;\n" +
    "        background-color: #fff;\n" +
    "        border-color: #fff;\n" +
    "        text-align:center;\n" +
    "    }\n" +
    "    .panel-login>.panel-heading a{\n" +
    "        text-decoration: none;\n" +
    "        color: #666;\n" +
    "        font-weight: bold;\n" +
    "        font-size: 15px;\n" +
    "        -webkit-transition: all 0.1s linear;\n" +
    "        -moz-transition: all 0.1s linear;\n" +
    "        transition: all 0.1s linear;\n" +
    "    }\n" +
    "    .panel-login>.panel-heading a.active{\n" +
    "        color: #029f5b;\n" +
    "        font-size: 18px;\n" +
    "    }\n" +
    "    .panel-login>.panel-heading hr{\n" +
    "        margin-top: 10px;\n" +
    "        margin-bottom: 0px;\n" +
    "        clear: both;\n" +
    "        border: 0;\n" +
    "        height: 1px;\n" +
    "        background-image: -webkit-linear-gradient(left,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0));\n" +
    "        background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n" +
    "        background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n" +
    "        background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n" +
    "    }\n" +
    "    .panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n" +
    "        height: 45px;\n" +
    "        border: 1px solid #ddd;\n" +
    "        font-size: 16px;\n" +
    "        -webkit-transition: all 0.1s linear;\n" +
    "        -moz-transition: all 0.1s linear;\n" +
    "        transition: all 0.1s linear;\n" +
    "    }\n" +
    "    .panel-login input:hover,\n" +
    "    .panel-login input:focus {\n" +
    "        outline:none;\n" +
    "        -webkit-box-shadow: none;\n" +
    "        -moz-box-shadow: none;\n" +
    "        box-shadow: none;\n" +
    "        border-color: #ccc;\n" +
    "    }\n" +
    "    .btn-login {\n" +
    "        background-color: #59B2E0;\n" +
    "        outline: none;\n" +
    "        color: #fff;\n" +
    "        font-size: 14px;\n" +
    "        height: auto;\n" +
    "        font-weight: normal;\n" +
    "        padding: 14px 0;\n" +
    "        text-transform: uppercase;\n" +
    "        border-color: #59B2E6;\n" +
    "    }\n" +
    "    .btn-login:hover,\n" +
    "    .btn-login:focus {\n" +
    "        color: #fff;\n" +
    "        background-color: #53A3CD;\n" +
    "        border-color: #53A3CD;\n" +
    "    }\n" +
    "    .forgot-password {\n" +
    "        text-decoration: underline;\n" +
    "        color: #888;\n" +
    "    }\n" +
    "    .forgot-password:hover,\n" +
    "    .forgot-password:focus {\n" +
    "        text-decoration: underline;\n" +
    "        color: #666;\n" +
    "    }\n" +
    "\n" +
    "    .btn-register {\n" +
    "        background-color: #1CB94E;\n" +
    "        outline: none;\n" +
    "        color: #fff;\n" +
    "        font-size: 14px;\n" +
    "        height: auto;\n" +
    "        font-weight: normal;\n" +
    "        padding: 14px 0;\n" +
    "        text-transform: uppercase;\n" +
    "        border-color: #1CB94A;\n" +
    "    }\n" +
    "    .btn-register:hover,\n" +
    "    .btn-register:focus {\n" +
    "        color: #fff;\n" +
    "        background-color: #1CA347;\n" +
    "        border-color: #1CA347;\n" +
    "    }\n" +
    "\n" +
    "</style>"