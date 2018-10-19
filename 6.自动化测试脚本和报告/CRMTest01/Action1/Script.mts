'--------------------脚本说明-----------------
'产品版本: 
'测试开发工程师: LongKai
'创建日期:
'脚本名称：
'测试功能点:
'脚本类型:
'--------------------脚本内容-----------------
Systemutil.Run  "iexplore.exe","http://127.0.0.1/ciircrm1.0/index.php?m=user&a=login"
'登陆CRM系统
Browser("员工登录 -").Page("员工登录 -").WebEdit("name").Set "admin" @@ hightlight id_;_Browser("员工登录 -").Page("员工登录 -").WebEdit("name")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("员工登录 -").Page("员工登录 -").WebEdit("password").Set "admin" @@ hightlight id_;_Browser("员工登录 -").Page("员工登录 -").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("员工登录 -").Page("员工登录 -").WebButton("登录").Click @@ hightlight id_;_Browser("员工登录 -").Page("员工登录 -").WebButton("登录")_;_script infofile_;_ZIP::ssf3.xml_;_
'创建线索
Browser("客户关系管理系统(CRM) CRM").Page("客户关系管理系统(CRM) CRM").WebElement("admin的工作台   添加组件").WaitProperty "innertext", "admin的工作台   添加组件", 10000
Browser("客户关系管理系统(CRM) CRM").Page("客户关系管理系统(CRM) CRM").Link("创建线索").Click
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("添加线索").WaitProperty "innertext", "添加线索", 10000 @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("添加线索")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebEdit("contacts_name").Set DataTable("customer_name", dtGlobalSheet) @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebEdit("contacts name")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebEdit("mobile").Set DataTable("customer_phone", dtGlobalSheet) @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebEdit("mobile")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebEdit("email").Set DataTable("customer_email", dtGlobalSheet) @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebEdit("email")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebList("address['state']").Select "贵州省" @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebList("address['state']")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebList("address['city']").Select "遵义市" @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebList("address['city']")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebEdit("description").Set "测试可以备注吗？" @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebEdit("description")_;_script infofile_;_ZIP::ssf10.xml_;_
'标准检查点
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("√").Check CheckPoint("√") @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("√")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("√_2").Check CheckPoint("√_2") @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("√ 2")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("√_3").Check CheckPoint("√_3") @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("√ 3")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebButton("保存").Click @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebButton("保存")_;_script infofile_;_ZIP::ssf14.xml_;_
'同步点 @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebButton("保存")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").Check CheckPoint("客户关系管理系统(CRM)客户关系管理系统(CRM)_2") @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").Sync
'删除线索 @@ hightlight id_;_1377400_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebCheckBox("leads_id[]").Set "ON" @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebCheckBox("leads id[]")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").Link("批量操作").Click @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").Link("批量操作")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").WebElement("批量删除").Click
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Dialog("来自网页的消息").WinButton("确定").Click @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").Check CheckPoint("客户关系管理系统(CRM)客户关系管理系统(CRM)_3") @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)")_;_script infofile_;_ZIP::ssf27.xml_;_
'退出CRM系统
Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").Link("退出").Click @@ hightlight id_;_Browser("客户关系管理系统(CRM)客户关系管理系统(CRM)").Page("客户关系管理系统(CRM)客户关系管理系统(CRM)").Link("退出")_;_script infofile_;_ZIP::ssf19.xml_;_
