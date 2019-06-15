$(function () {
    var $head = $("<!--头部开始--><div class=\"container-fluid\" name=\"top\">\n" +
        "       <div class=\"row\" style=\"width: 100%;\">\n" +
        "<div class=\"head_nav col-md-12\" style=\"padding-left: 30px;\">\n" +
        "<img src=\"img/logo.png\" class=\"img_width pull-left\" style=\"width: 1000px;margin-left: -55px\"/>\n" +
        "<span style=\"font-size: 30px; margin-left: -50px;margin-top:80px;color: red;display: inline-block;\n\t\t\t\t\t\">网站测试中...</span>\n" +
        "<a href=\"#\"><img id=\"search\" src=\"img/search_icon.png\" class=\"pull-right\"/></a>\n" +
        "<a href=\"index.html\"><img id=\"home\" src=\"img/home.png\" class=\"pull-right\"/></a>\n" +
        "  <a href=\"index.html\" class=\"pull-right\">回到首页</a>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--头部结束--><!--导航开始-->" +
        "<div class=\"navbar navbar-default\" role=\"navigation\">\n" +
        "<div class=\"container-fluid\">" +
        "<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n" +
        "<span class=\"icon-bar\"> </span>\n" +
        "<span class=\"icon-bar\"> </span>\n" +
        "<span class=\"icon-bar\"> </span>\n" +
        "</button>\n" +
        "<div class=\"collapse navbar-collapse\" id=\"navbar-main\">\n" +
        "<ul class=\"nav navbar-nav\">\n" +
        "<li class=\"dropdown\" role=\"presentation\">\n" +
        "<a href=\"javascript:;\" class=\"dropdown-toggle\">学院概况<span class=\"caret\"></span></a>\n" +
        "<ul class=\"dropdown-menu\">\n" +
        "<li><a href=\"CollegeIntro.html\">学院简介</a></li>\n" +
        "<li><a href=\"OrganizationStr.html\">组织机构</a></li>\n" +
        "<li><a href=\"DeanTntro.html\">院长介绍</a></li>\n" +
        "<li><a href=\"ManageTeam.html\">管理团队</a></li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li class=\"dropdown\" role=\"presentation\">\n" +
        "<a href=\"javascript:;\" class=\"dropdown-toggle\">人才培养<span class=\"caret\"></span></a>\n" +
        "<ul class=\"dropdown-menu\">\n" +
        "<li><a href=\"ProfessionalIntro.html\">专业介绍</a></li>\n" +
        "<li><a href=\"PracticeTeaching.html\">实践教学</a></li>\n" +
        "<li><a href=\"ProjectStudio.html\">项目工作室</a></li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li class=\"dropdown\" role=\"presentation\">\n" +
        "<a href=\"javascript:;\" class=\"dropdown-toggle\">师资队伍\n" +
        "<span class=\"caret\"></span></a>\n" +
        "<ul class=\"dropdown-menu\">\n" +
        "<li><a href=\"FacultyStrength.html#specially\">特聘教授</a></li>\n" +
        "<li><a href=\"FacultyStrength.html#visting\">客座教授</a></li>\n" +
        "<li><a href=\"FacultyStrength.html#Full-Time\">专业教师</a></li>\n" +
        "<li><a href=\"TeachAndResarTeam.html\">教研团队</a></li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li class=\"dropdown\" role=\"presentation\">\n" +
        "<a href=\"javascript:;\" class=\"dropdown-toggle\">学院荣誉<span class=\"caret\"></span></a>\n" +
        "<ul class=\"dropdown-menu\">\n" +
        "<li><a href=\"StudentAward.html\">学生获奖</a></li>\n" +
        "<li><a href=\"TeacherAward.html\">教师获奖</a></li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li class=\"dropdown\" role=\"presentation\"><a href=\"javascript:;\" class=\"dropdown-toggle\">招生就业<span class=\"caret\"></span></a>\n" +
        "<ul class=\"dropdown-menu\">\n" +
        "<li><a href=\"EnrollmentWork.html\">招生工作</a></li>\n" +
        "<li><a href=\"Employment.html\">就业工作</a></li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li class=\"dropdown\" role=\"presentation\">\n" +
        "<a href=\"LeagueWork.html\">团学工作<span class=\"caret\"></span></a>\n" +
        "</li><li class=\"dropdown\" role=\"presentation\">\n" +
        "<a href=\"javascript:;\" class=\"dropdown-toggle\">党建工作<span class=\"caret\"></span></a>\n" +
        "<ul class=\"dropdown-menu\"><li><a href=\"PartyBuilding.html\">通知公告</a></li>\n" +
        "<li><a href=\"PartyBuilding.html\">理论学习</a></li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li class=\"dropdown\" role=\"presentation\">\n" +
        "<a href=\"javascript:;\" class=\"dropdown-toggle\">合作交流<span class=\"caret\"></span></a>\n" +
        "<ul class=\"dropdown-menu\">\n" +
        "<li><a href=\"ExchangeAndCooper.html\">交流动态</a></li>\n" +
        "<li><a href=\"ExchangeAndCooper.html\">校企合作</a></li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "</ul>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--导航结束-->");
    $("#head").append($head);
    // 底部
    var $foot="<!--首页底部开始-->"+
		"<div class=\"footer\">"+
			"<div class=\"img\"></div>"+
			"<p>地址：四川省成都市郫都区团结镇学院街65号;邮编：611745<br/>联系电话：028-87953079</p>"+
		"</div>"+
		"<!--首页底部结束-->";
    $('#footer').append($foot);

    // 回到顶部
    var $backtop=
            "<div class=\"t-right-bar\">"+
			"<div class=\"t-bar-rocket\" id=\"back-to-top\">返回顶部</div>"+
		    "</div>";
    $('#backtop').append($backtop)
});