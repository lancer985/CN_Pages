var c = 0;
var d = 0;
alert("Bilibili自动答题脚本 V2.1 \n题库题数：305 \n最后更新：2014.05.01 \n有可能需要很长时间，若提示脚本或网页长时间无响应请选择等待。 \n我们的QQ群号：204524182 \n\n按确定开始执行。");
if(confirm("若有题没有找到答案或答案无效，是否自动填选第一个选项（若选择否将会留空）？ \n确定：是；取消：否。"))
{
  f = true;
}else{
  f = false;
};
try
{
  for(i = 0; i < 100; i += 1)
  {
    var l = document.getElementById("l_" + i).innerHTML.split(">");
    var n = l[3].split("<");
    n = n[0].substring(1, n[0].length - 8);
    var a = b(n);
    if(a != "hyErrNotFound")
    {
      for(j = 0; j < 5; j += 1)
      {
        if(j == 4)
        {
          alert("题库错误，请截图并发给我。 \n\n问题：" + n + " \n返回的答案：" + a + " \n缓存：" + l);
          if(f)
          {
            z(i, 0);
          };
          d += 1;
          break;
        };
        var s = l[6 + j * 3].split("<");
        s = s[0].substring(0, s[0].length - 9);
        if(s == a)
        {
          z(i, j);
          break;
        };
      };
    }else{
      if(f)
      {
        z(i, 0);
      };
      c += 1;
    };
  };
  alert("自动答题结束，有" + c + "道题没找到，有" + d + "道题返回无效（题库错误）…… \n请您检查一遍后提交（如果发现题库有错误请告诉我；如果脚本太给力还是等二十分钟再提交，答题太快有可能被封号呢）。 \n欢迎您加入我们的讨论群一起讨论完善题库！ \n我们的QQ群号：204524182");
}catch(e){
  alert("发生错误，脚本将终止。 \n若您在答题页面运行的这个脚本，请截图并发给我。 \n错误信息： \n" + e);
};
alert("感谢这些人对我的大力支持（不分排名）： \n雨宫优子（352275201） ");
function z(x, y)
{
  $('#rdo' + x + y).attr('checked', 'checked');
};
function b(q)
{
  switch(q)
  {
//32 + 273 = 305
//题库01 - 32道 - 【群主】？（1043201997）提供 - 2014.04.29
case "Bilibili采用邀请码注册，注册满几个月以上的用户才能购买邀请码？": return "三个月";
case "自古红蓝出什么？": return "CP";
case "官方逼死了谁？": return "同人";
case "下面哪位是个中二少女": return "小鸟游六花";
case "暴漫中“荆轲刺秦王”的下一句是": return "两条毛腿肩上扛";
case "团战可以输，\_\_\_\_必须死？": return "提莫";
case "《命运石之门》中凤凰院凶真的配音是？": return "宫野真守";
case "以下哪部动漫不是京阿尼（京都动画公司）制作的？": return "FZ";
case "《海贼王》的作者是谁？": return "尾田荣一郎";
/*10*/case "《科学的超电磁炮》中，Lever\.5被称为？": return "超能力者";
case "《魔法少女小圆》的导演是谁？": return "新房昭之";
case "奥特曼来自哪个星云？": return "m78";
case "奥特曼的家在哪里": return "M78";
case "《龙与虎》中的龙指的是谁？": return "高须龙儿";
case "十万个冷笑话是哪家漫画网连载的": return "有妖气";
case "地球距离月球之间的距离为？": return "384\,400千米";
case "网络上11区指的是那个国家？": return "日本";
case "日语“我爱你”的空耳是什么？": return "阿姨洗铁路";
case "《某科学的超电磁炮》中，佐天同学经常对初春同学做的一件事情是什么？": return "掀裙";
/*20*/case "著名虚拟偶像初音未来的声源是谁？": return "藤田咲";
case "沙盒游戏“我的世界”的英文名是什么？": return "minecraft";
case "《Fate\/ZERO》中Saber的Master是谁？": return "卫宫切嗣";
case "《魔法的禁书目录》中的特殊能力是什么？": return "魔法和超能力";
case "自称为“爱的战士”的人是谁？": return "虚渊玄";
case "请问FFF团的宗旨是什么？": return "烧死异性恋";
case "电磁炮四主角中谁的能力是空间移动？": return "白井黑子";
case "宅界的“东方”指的是什么": return "东方project";
case "桂木桂马自封的称号是？": return "攻略之神";
case "《魔法少女小圆》中巴麻美学姐是哪一话死的？": return "第三话";
/*30*/case "《 某科学的超电磁炮》中 最后之作 的检体番号是多少？": return "检体番号20001";
case "哪个不属于“钉宫四萌”？": return "神乐";
case "以下动漫少女哪个是金色双马尾？": return "A三千院凪";
//题库02 - 273道 - 雨宫优子（352275201）提供 - 2014.04.30
case "灼眼的夏娜中女主角的刀名字叫": return"贽殿遮那";
case "《摇曳百合》中京子喜爱的冰淇淋口味是什么": return"朗姆酒葡萄干";
case "命运石之门男主角的网名是": return"凤凰院凶真";
case "以下哪部游戏中没出现东风谷早苗": return"东方神灵庙";
case "《CLANNAD》中的冈崎朋也的配音是谁？": return"中村悠一";
case "《火影忍者》中的第五代火影是谁？": return"千手纲手";
case "桂木桂马的协助者是谁？": return"艾露西 琉妮";
case "杀手47的后脑勺上有什么": return"条形码";
case "psycho pass里最美警花是谁?": return"宜野座伸元";
case "《数码兽大冒险》中第八位被选召的孩子是？": return"八神光/八神嘉儿";
case "雾雨魔理沙的口癖是？": return"DA☆ZE";
case "切丝papa的生日在几月几日？": return"11.11";
case "为动画《魔法少女小圆》中佐仓杏子一角配音的声优是？": return"野中蓝";
case "“月有阴晴圆缺”,用科学的观点看待这件事,原因是？": return"地球绕太阳转动,月球绕地球转动,两者转速不一样,出现偏角,使地球掩住了月球的一部分";
case "《我的朋友很少》中,井上麻里奈为哪个角色配音？": return"三日月夜空";
case "游戏《生化危机1》的第一女主角是谁？": return"吉尔•瓦伦蒂安";
case "回转企鹅罐中一共有多少个ED？出了多少个OST": return"10,8";
case "身为纯爷们,绝对从不回头看什么": return"爆炸";
case "以下哪一位不是《最终幻想：零式》的CV": return"钉宫理惠";
case "《大航海时代2》阿兰的特长是什么？": return"会计";
case "钢之炼金术师FA中角色张梅身边总跟着一只什么动物": return"熊猫";
case "Fate stay night中,士郎击杀Berserker所投影的武器叫？": return"Caliburn石中剑";
case "初音未来的音源提供者是哪个声优？": return"藤田咲";
case "著名电子游戏《上古卷轴》是由哪家公司开发的？": return" Bethesda";
case "石蕗惠汰,羽濑川小鹰,须贺京太郎,大路饼藏四人的共同点[不]包括": return"都是男孩子";
case "在Mugen中,最高的人物等级是？": return"论外";
case "圣斗士星矢的看家技能是？": return"天马流星拳";
case "魔兽世界里的联盟英雄吉安娜是什么职业": return"法师";
case "谁被称为日本动画界的黑泽明？": return"宫崎骏";
case "“世界已完蛋”来自于哪部作品OP的空耳？": return"潜行吧奈亚子";
case "炮姐的最爱是？": return"呱太";
case "美少女战士的作者是哪位漫画家的夫人？": return"富坚义博";
case "陈坤在微博向大家推荐了哪部动画得到群众热烈反应？": return"《Fate\/Zero》";
case "在FATE STAY NIGHT 中阿尔托莉雅的职介是什么": return"Saber";
case "正面上我啊是哪个人物的名台词"/*【出自HKG字幕组,大战后炮姐被黑子正面上了。。。。*/: return"御坂美琴";
case "为《星际牛仔》《攻壳机动队》《Macross F》等动画配乐的著名音乐制作人是": return"菅野洋子";
case "⑨指的是东方project中的那个人物？": return"琪露诺";
case "《天降之物》第一集中从天而降的天使名字是？": return"伊卡洛斯";
case "路过草从最担心的是哪句话？": return"德玛西亚";
case "《海贼王》中与路飞同行的一位厨师是": return"香吉士";
case "自古枪兵的幸运值是多少": return"e";
case "德玛西亚之力此人物出自哪个游戏？": return"《英雄联盟》";
case "虽然我可爱又迷人,但我会招来\_\_。": return"死亡";
case "key社以下哪一部作品不是由京都动画改编？": return"Little Busters!";
case "动漫11区指哪里？": return"日本";
case "《CLANNAD》中,藤林杏的摩托车是什么颜色的？": return"白色";
case "《穷神》中红叶是什么罩杯？": return"AA罩杯"/*...*/;
case "《兽的演奏者艾琳》中的里岚是雄性还是雌性？": return"雌性";
case "东方幻想乡中妖怪之山上守矢神社中的风祝叫什么名字？": return"东风谷早苗";
case "《電腦線圈》中的沙奇(Search Mutton),是甚麼？": return"病毒驱除程式";
case "雾雨魔理沙在东方神灵庙（TH13）中的称号是？": return"普通的魔法使";
case "薛定谔的猫是薛定谔的一个著名实验,其不涉及的问题是 ": return"势垒穿透";
case "《海贼王》中现任海军元帅的是谁？": return"赤犬";
case "暴走漫画的男主角一般都叫什么？": return"王尼玛";
case "小鸟游六花的中二属性是什么？": return"邪王真眼";
case "傅里叶级数是傅里叶在研究哪种物理现象时提出的？": return"热传导";
case "阿姆斯特朗回旋加速喷气式阿姆斯特朗炮“的名字出自哪部动漫": return"《银魂》";
case "火影忍者中4代火影和主角鸣人是什么关系？": return"父子";
case "dota是哪个游戏的地图\?": return"魔兽世界";
case "在《死亡笔记》中,是谁杀死了夜神月？": return"硫克";
case "机战里常说的“吉姆王”是出自哪一部作品": return"传说巨神";
case "以下哪一个游戏在早期2D时代的第一部作品不是俯视角？": return"银河战士";
case "无头骑士异闻录中罪歌到11卷出现了几个母体？": return"2个";
case "《魔笛MAGI》中梶裕貴配音的角色是谁？": return"阿里巴巴";
case "兵库北的天气怎么样？": return" 雨 19℃ 60\%\/40\%";
case "\“海尔,这是阿包特•泰姆\”这句台词出自哪款游戏？": return"星际争霸2";
case "被成为\“一生万物、万物归一者\”的是": return" Yog-Sothoth";
case "《旋风管家》中的女主角三千院凪的身高是？(直接输入阿拉伯数字） ": return"138";
case "银河英雄传说中男主角杨威利是如何死亡的": return"被地球教刺客刺杀";
case "动漫（雪之少女）泽渡真琴,的口头禅是什么 ": return"啊呜";
case "《魔法少女小圆》的编剧（脚本）是谁？": return"虚渊玄";
case "下列哪个角色不是关智一配音的？": return"基拉•大和";
case "是谁提出“感应电流的磁场总是要阻碍引起感应电流的磁通量的变化“\?": return"楞次";
case "动漫《火影忍者》中,宇智波佐助所拥有的瞳术的名字是？": return"写轮眼";
case "《轻音少女》动画中,活动室里养的动物是？": return"乌龟";
case "灼眼的夏娜中夏娜所带的项链中红世之徒的名字是": return"亚拉斯托尔";
case "国产动画片《魁拔》中,魁拔的重生时间是": return"333年";
case "以下哪一款RPG（角色扮演游戏）属于WRPG（欧美角色扮演游戏）？": return"博德之门";
case "C语言中,如果ar是个数组,那么表达式ar[i]与什么等价？": return"\*ar(i+1)";
case "c语言中换行符是？": return"\\n";
case "某万事屋老板的名字是？": return"坂田银时";
case "以下那部动画的配乐不是梶浦由纪？": return"fate stay night";
case "《某科学超电磁炮》中 御坂美琴的硬币大约能打多少米？": return"50米";
case "以下哪个动漫人物被作为我朝四代隐形战机的爱称？": return"秋山澪";
case "EVA新剧场版中真希波玛丽眼镜镜框的颜色是": return"红色";
case "世界第一公主殿下是谁": return"初音未来";
case "哔哩哔哩是什么类型的网站\?": return"弹幕视频";
case "2012年日萌萌王是谁": return"园城寺怜";
case "《穿越火线》由国内哪家公司代理运营？": return"腾讯";
case "下列各项不属于电脑操作系统的是": return"S60";
case "国际标准化组织ISO制定的OSI模型中,路由器工作在哪一层？": return"网络层";
case "下列谁没有担任《机动战士高达V》的机设": return"安彦良和";
case "mugen人物实力一共有几个级别": return"7个";
case "由Nintendo公司发售的8位游戏机的名称缩写是什么？": return"FC";
case "（）,你一定不懂吧。括号里的名字是？": return"心叶";
case "团长的名字是": return"凉宫春日";
case "空之境界中与阴性人格式相反的阳性人格是\?": return"织";
case "东方project中不死组指的是那对CP": return"妹红X辉夜";
case "《蔷薇少女》中翠星石的瞳色是？": return"左绿右红";
case "当PCl5 = PCl3 +Cl2的化学平衡常数Kc=1.8M时,在0.5L的容器中加入0.15molPCl5,求平衡后Cl2的浓度": return"0.26M";
case "《to love》中的梨斗的妹妹的配音是谁？": return"花泽香菜";
case "以下哪位角色脸上没有刀疤？": return"阿鲁卡多@HELLSING";
case "“我的这把刀可是涂满了毒药的毒刃”出自于哪部作品": return"勇士闯魔城";
case "下列动画作品中,那一部是由京都动画公司制作的。": return"幸运星";
case "高达鲁姆会战中吉翁一方出动了多少艘姆赛级巡洋舰？": return"69";
case "《加速世界》男主角是谁？": return"有田春雪";
case "《今天开始做魔王》中,涉谷有利第一次是怎么穿越的？": return"被女厕的抽水马桶冲到异界";
case "在缩写\“ACG\”中字母\“G\”代表什么？": return"Game";
case "在动漫《叛逆的鲁路修》中,C.C.的头发的颜色是？": return"绿色";
case "凡能从石台上拔出此剑者,即为英格兰的天命之王。出自哪部动漫？": return"命运之夜";
case "3dmax中旋转视图按哪个键": return"alt+鼠标中键";
case "以下哪个不是鬼畜全明星成员？": return"金凯瑞";
case "游戏《帝国时代2》中,中国的特色兵种是？": return"诸葛弩手";
case "“钉宫病”是指有关哪位声优的病症？": return"钉宫理惠";
case "晓美焰的声优是？": return"斋藤千和";
case "下列哪个人物与《kiss×sis》中「住之江理香」的配音相同？": return"蕾蒂西亚";
case "请问被称为名作之壁的是什么动漫？": return"Infinite Stratos";
case "我国4个直辖市中哪个面积最大？": return"重庆";
case "《clannad》中藤林杏所养的宠物小野猪的名字是什么？": return"牡丹";
case "葛平的职业是？（说正经的）": return"配音演员";
case "日语的元音的罗马音是？": return"aiueo";
case "农业不发达,必须要有什么？": return"金克拉";
case "阿卡林的原名是...": return"赤座灯里";
case "《十二国记》的作者是谁": return"小野不由美";
case "《青之驱魔师》是作者是那位？": return"加藤和惠";
case "以下哪一部作品的剧本不是虚渊玄？": return"尘骸魔京";
case "游戏MONSTER HUNTER 3G 中共有几种武器？": return"12";
case "夏目友人帐中的猫咪老师（斑）被动漫爱好者称呼为？": return"娘口三三";
case "元首曾经去过中国的哪个省份？": return"河北省";
case "钉宫四萌哪个出现的最早 ": return"夏娜";
case "动漫《FATE ZERO》中,Rider的名字是？": return"亚历山大•伊斯坎达尔";
case "官方逼死了谁？": return"同人";
case "北极熊的毛是什么颜色？": return"透明";
case "《死神》现任二番队队长大人的名字是？": return"碎蜂";
case "“不要叫我大王,要叫我\_\_\_\_\_\_\_！” 空缺处填？": return"女王大人";
case "拼音“s”的发音是？": return"唇齿清擦音";
case "零之使魔中露易丝在托里斯汀所打工的酒馆前身叫什么": return"鳗鱼之睡床";
case "《龙与虎》中的逢坂大河声优是谁？": return"钉宫理惠";
case "下列各项不属于电脑操作系统的是": return"S60";
case "Operation Skuld出自哪部动画？": return"Chaos;Head";
case "FFF团作为一种自发组织的民间团体主要活动形式是？": return"烧死情侣";
case "哪部是key社所谓的秋？": return"One";
case "以下哪个不是国产游戏。": return"空之轨迹";
case "虚渊玄被称为？（四个中文汉字）": return"爱的战士";
case "一部动漫名称,《XXXX的忧郁》,XXXX应为？": return"凉宫春日";
case "动画《回转企鹅罐》的监督是谁？": return"几原邦彦";
case "《Angel Beast》的女主角是谁？": return"立华奏";
case "以下谁拥有Geass的能力？": return"鲁鲁修";
case "新日暮中的黑暗势力统领是谁？": return"VAN样";
case "XX我成为正义的伙伴了吗？": return"切嗣";
case "400大妈是指": return"东映蜘蛛人";
case "海猫鸣泣之时的武具是叫什么名字？": return"谢斯塔姐妹兵";
case "key君是谁？": return"杉崎健";
case "以下哪个地区代表未出现在金克拉广告中？": return"俄罗斯";
case "以下哪个人不属于ACG界四大人渣？": return"结城梨斗";
case "某部机甲动漫中出现的经典台词是？": return"我爸爸都没打过我！";
case "阿良良木历有几个妹妹？": return"2个";
case "金坷垃三人组里的非洲人叫什么名字。": return"东仙队长";
case "以下哪部作品没有得过这本轻小说真厉害排行榜的第一？": return"龙与虎";
case "逢坂大河是哪部作品的主角": return"龙与虎";
case "洛天依的声源是": return"山新";
case "《机动战士高达00》中刹那.f.清英的配音是谁？": return"宫野真守";
case "《Love Live!》中的小泉花阳最喜欢的食物是。": return"白米饭";
case "NTSC制式的视频帧率是": return"30fps";
case "博丽灵梦所在的神社是什么？": return"博丽神社";
case "日本剑圣宫本武藏自创的武术是什么？": return"二天一流";
case "\“今天的风儿好喧嚣啊\”的出处。": return"男子高中生的日常";
case "声优喜多村英梨被中国网友戏称为？": return"酋长";
case "下面哪个角色不是浪川大辅配的？": return"怪盗基德";
case "《虫之歌》中的狮子堂戌子绰号是？": return"小狗";
case "回转企鹅罐中一共有多少个ED？出了多少个OST？": return"10,8";
case "以下不是光色三原色的是？": return"绿色";
case "高达的英文缩写是。": return"GUNDAM";
case "蒙奇•D•路飞出自哪个作品。": return"海贼王";
case "“给我一个支点,我可以撬动地球”这句话是谁说的？": return"阿基米德";
case "《中二病也要谈恋爱》中小鸟游六花的姐姐叫什么名字？": return"小鸟游十花";
case "《英雄联盟》中盖伦是哪个势力的。": return"德玛西亚";
case "幽灵行军不是谁的固有结界": return"梵•斐姆";
case "《化物语》中战场原黑仪的配音是谁？": return"斋藤千和";
case "春秋战国时期,哪家学说的主张是“兼爱”“非攻”？": return"墨家";
case "《未来日记》中女主叫什么名字？": return"我妻由乃";
case "路飞的爷爷是？": return"海军";
case "“拔刀,拔刀,拔刀”出自哪部漫画？": return"K";
case "下列动画作品中,那一部是由京都动画公司制作的。": return"幸运星";
case "高达鲁姆会战中吉翁一方出动了多少艘姆赛级巡洋舰？": return"69";
case "在缩写“ACG”中字母“G”代表什么？": return"Game";
case "在动漫《叛逆的鲁路修》中,C.C.的头发的颜色是？": return"绿色";
case "凡能从石台上拔出此剑者,即为英格兰的天命之王。出自哪部动漫？": return"命运之夜";
case "日语的元音的罗马音是？": return"aiueo";
case "《十二国记》的作者是谁": return"小野不由美";
case "《青之驱魔师》是作者是那位？": return"加藤和惠";
case "以下哪一部作品的剧本不是虚渊玄？": return"尘骸魔京";
case "游戏MONSTER HUNTER 3G 中共有几种武器？": return"12";
case "拼音“s”的发音是？": return"唇齿清擦音";
case "动画《回转企鹅罐》的监督是谁？": return"几原邦彦";
case "《Angel Beast》的女主角是谁？": return"立华奏";
case "以下谁拥有Geass的能力？": return"鲁鲁修";
case "英雄联盟中国服三大永久免费英雄之一是？": return"流浪法师";
case "声优界中的大辅家族不包括以下哪个姓": return"铃木";
case "《无头骑士异闻录》中,黄巾贼的首领被称呼为？": return"将军";
case "以下哪一个动画原作者是男性？": return"黑塔利亚";
case "空条Q太郎在JOJO里出场了多少部？": return"3";
case "2ch上某gal讨论板块“叶键版”分别指的是那两个游戏厂商": return"Moon Laef&Key ";
case "Fate Zero第二季中的OP作者是谁": return"梶浦由记";
case "以下哪个词是来自日语,意为不引人注意的小知识": return"豆知识";
case "魂中吉原的百华自卫队首领是？": return"月咏";
case "最终幻想零式中,machina最多可以展开强力攻击多少次": return"10";
case "下列哪个不是最早的“讲卫生除四害”之中的“四害”": return"蟑螂";
case "“夏亚你算计我”这句话是哪位人物的名言": return"卡尔玛 扎比";
case "亚洲颜艺三巨头不包括？": return"葛炮";
case "\"只要是活着的东西,即使是神也杀给你看\"是下面哪个人的名言？": return"两仪式";
case "以下哪一位CV不属于声优御三家": return"花泽香菜";
case "中国的第一艘航空母舰叫什么名字": return"辽宁号";
case "以下哪一位不属于type moon？": return"小山广和";
case "光线是波动,也是（ )。": return"粒子";
case "《to love》中的梨斗的妹妹的配音是谁？": return"花泽香菜";
case "\“我的这把刀可是涂满了毒药的毒刃\”出自于哪部作品": return"勇士闯魔城";
case "高达鲁姆会战中吉翁一方出动了多少艘姆赛级巡洋舰？": return"69";
case "《加速世界》男主角是谁？": return"有田春雪";
case "路飞的爷爷是？": return"海军";
case "“拔刀\,拔刀\,拔刀”出自哪部漫画？": return"K";
case "《凉宫春日的忧郁》中谁是“外星人”？": return"长门有希";
case "刺客信条中的袖箭不切手指是被谁改进的？": return"艾吉奥";
case "最喜欢从人群中钻出来的关头是谁？": return"吴克";
case "以下哪个游戏不是saga planets的作品": return"さくら、咲きました";
case "战略大作战这部电影当中，主角们做了啥？": return"开着谢尔曼抢银行";
case "开着谢尔曼抢银行": return"花泽香菜";
case "《哆啦A梦》中多啦A梦是从什么时代来的？": return"22世纪";
case "国产动画《魁拔》中，主角的名字是？": return"蛮吉";
case "游戏公司“南梦宫”有一个数字缩写，是什么？": return"765";
case "坦克世界中唯一一辆满仇恨值的黄金色坦克是什么？": return"59式";
case "问更新姬的发式": return"绿色双马尾";
case "网络上11区指的是那个国家？": return"日本";
case "刺客信条中的袖箭不切手指是被谁改进的？": return"康纳";
case "《命运石之门》中凤凰院凶真的配音是？": return"宫野真守";
case "真女神轉生3 狂熱版’中，但丁和人修羅初次見面的地點是？": return"銀座";
case "以下那個不是釘宮四萌\?": return"神崎•H•亞里亞";
case "谁不懂人心了？": return"亚瑟王";
case "黑猫警长每集打四枪出现四个字是\?": return"请看下集";
case "在鬼武者3最终关左马介吸收了信长的爱刀所融合出的最强之剑的正确名称是": return"鬼斩左文字";
case "人妻声优門脇舞以的马甲是？": return"杏子御津";
case "与洛天依有关的代码是？": return"66CCFF";
case "《口袋妖怪》历作游戏中，能够让PM的等级提高一级的道具是？": return"等级提升";
case "冻土的旅人中《白色荒野》一章改编自\_\_\_\_的小说": return"杰克伦敦";
case "生化危机系列中，僵尸的始作俑者是？": return"T病毒";
case "绑在魂魄妖梦的楼观剑上的花叫什么名字": return"秋樱";
case "《圣斗士星矢》冥王篇中谁是被冥王哈迪斯选中肉体的圣斗士？": return"瞬";
case "以下哪个系列的发行商不是Ubisoft（育碧）": return"孤岛危机系列";
case "《伊克西翁传说DT》玛丽安戴尔的声优是？": return"福山润";
case "《中二病也要谈恋爱》当中丹生谷森夏从“中二病”毕业以后转而相信了什么": return"黑暗圣典";
case "《冰菓》中奉太郎的人生信条是？": return"节能主义";
case "《妖精的尾巴》中，妖精的尾巴公会的第二代灭龙魔导士是": return"拉克萨斯";
case "这个世界上不存在奇迹，有的只是必然与偶然，以及谁做了什么。此话出自什么动漫？": return" 悠久之翼（EF系列）";
case "“王师全面占优”出自下列哪个游戏？": return"EVE";
case "幻想乡里操纵境界的妖怪是？": return"八云紫";
case "地球距离月球之间的距离为？": return"384,400千米";
case "nds平台第一款游戏王是哪一年出的": return"2007";
case "miku左臂的数字是多少？": return"01";
case "&lt;犬夜叉&gt;中，戈薇的配音是谁？": return"雪野五月";
case "以下哪位人物是因为视力不好才戴眼镜的": return"黑桐干也";
case "TV动画《进撃の巨人》第6集中 “少女の奔跑”巨人是谁干掉的？": return"三笠•阿克曼";
case "赤座灯里最缺少的是什么？": return"存在感";
case "网游《坦克世界》中，S-51的完全体炮的口径是多少？": return"203";
case "UC系高达作品中象征着量产机的胜利的是哪部作品？": return"机动战士高达第08MS小队";
case "《物语系列》中谁的头发会飞速长长": return"阿良良木月火";
case "天元突破的男主角是谁？": return"西蒙";
case "命运石之门冈部伦太郎经常自称是谁？（名字）": return"凤凰院凶真";
case "以下哪个不是音频处理软件": return"Premiere";
case "《魔法少女小圆》中学姐死的时候失去了身体的哪一部分？": return"头";
case "《未来日记》中，“雪辉日记”的持有者是谁？": return"我妻由乃";
case "以下哪首是洛天依的歌": return"千年食谱颂";
case "动画《刀剑神域》中桐人他女儿结衣在ALO里系统识别种族是？": return"导航妖精";
case "俺はGandom（我就是高达）这句话是谁说的？": return"刹那•F•清英";
//
    default: return "hyErrNotFound";
  };
};
