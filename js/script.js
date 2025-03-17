// JavaScript source code

    /*区分是什么学院的能力or本职能力or其他
    Bard-本职
    Lore-逸闻
    Valor-勇气
    Glamour-迷惑
    Swords-剑舞
    Whispers-低语
    Creation-创造
    Eloquence-雄辩
    Spirits-精魂
    Dance-舞蹈
    Others-其他
    */





//核心函数，音乐播放
var audioElement = new Audio(); //保证只有一个音源，在此使用同一全局变量
var RandomNumber_compare = Math.floor(Math.random() * 2) //音乐播放的随机数，用以确定上次播放的内容。
function PlayMusic() {    
    //播放音乐
    //选择音乐列表
    switch (this['id'].split('_')[0]) {
        case 'Bard':
        MusicList = MusicList_Bard;
        break;
        case 'Spirits':
        MusicList = MusicList_Spirits;
        break;
        case 'Creation':
        MusicList = MusicList_Creation;
        break;
        case 'Lore':
        MusicList = MusicList_Lore;
        break;
        case 'Dance':
        MusicList = MusicList_Dance;
        break;//加新学院的时候别忘记每个下面加break
    }
    
    //选择列表中的音乐
    let RandomNumber = Math.floor(Math.random() * MusicList[this['id'].split('_')[1]].length);
    
    //用来保证此次随机数和上次不同
    if (MusicList[this['id'].split('_')[1]].length >= 2){ //只在列表中有不少于2首音乐时，才能选择和上次不同的音乐
        while  (RandomNumber_compare == RandomNumber) {  
        RandomNumber = Math.floor(Math.random() * MusicList[this['id'].split('_')[1]].length);
            }
        window.RandomNumber_compare = RandomNumber;
    }    
    //console.log(RandomNumber);


    //用来停止当前播放的音乐
    if (!audioElement.paused) { //audioElement.paused 检测音源是否停止，！取反
        audioElement.pause();   //如果不是停止，audioElement.pause()给它停了
      }
    

    audioElement.src='./assets/'+ this['id'].split('_')[0] +'/music'+this['id'].split('_')[1]+'/'+MusicList[this['id'].split('_')[1]][RandomNumber];    
	audioElement.play(); 

    //振动效果，0.2秒
    this.classList.add('shake')
    setTimeout(() => { this.classList.remove('shake') }, 200)
}









//诗人本职


//似乎可以通过github的api获取repo中子目录的内容列表。https://api.github.com/repos/solomonxie/gists/contents/目录名。但是比较麻烦。
const MusicList_Bard = [
    [''],//0-空的，下面开始是本职技能
    ['youcandoanything.mp3','我来助你.mp3','justdoit.mp3','EVA.mp3','你被强化了，快上.mp3'],//1-诗人激励
    ['Trump.mp3','各个是强项.mp3','略懂略懂.mp3'],//2-万事通
    ['3点了，饮茶先.mp3','报菜名.mp3','迷宫饭.mp3'],//3-休憩曲
    ['你清醒一点.mp3','反诈APP.mp3','我信你个鬼.mp3'],//4-反迷惑
    ['孔乙己.mp3','你能我也能.mp3','小偷公司.mp3'],//5-魔法奥秘
    ['诸葛亮骂死王朗.mp3','钉宫三连.mp3','我能说脏话吗.mp3','练死劲.mp3']//6-恶毒嘲笑
    ] 
//绑定元素
const Bard_1 = document.getElementById('Bard_1');
const Bard_2 = document.getElementById('Bard_2');
const Bard_3 = document.getElementById('Bard_3');
const Bard_4 = document.getElementById('Bard_4');
const Bard_5 = document.getElementById('Bard_5');
const Bard_6 = document.getElementById('Bard_6');
//添加函数响应
Bard_1.addEventListener('click', PlayMusic)
Bard_2.addEventListener('click', PlayMusic)
Bard_3.addEventListener('click', PlayMusic)
Bard_4.addEventListener('click', PlayMusic)
Bard_5.addEventListener('click', PlayMusic)
Bard_6.addEventListener('click', PlayMusic)


//恶言相加专门
//恶言相加词库of博得之门3，来自https://ngabbs.com/read.php?tid=39108352
//因为显示中文有问题，感觉是js和html的编码不对付，这里的中文是用unicode编码的
Vicious_Mockery_list_CN=["滚回你妈的肛门里去吧。","是哪只座狼把你嚼过之后又吐出来的？","你的身板子比稀粥还弱。","认识你真令我作呕。","鬼婆都不搭理的人渣。","你这黄铁奶头！","你光呼吸能让死人死两次了。","十条鲶鱼加在一起都没你湿！","流脓的蛆。","滚远点，你个满脸痘子的嬷嬷！","连蟑螂都瞧不起的小丑。","尿频尿急的麻子！","你的身体就是一个庙，侍奉白痴之神的庙。","要我把你和母猪的屁作比较吗？","瞧，好一个呱噪的倒霉蛋！","矮，挫，穷。","作为一个拖后腿的，你的下场只有失败。","你这见不得人的猪。","你比腐烂的馅饼还臭。","想要我歌颂你吗？只有你身上的臭味值得歌颂。","赶紧用胶布把嘴巴封起来吧。","吞地精大便的家伙！","坏死的老毒物。","还要你的白痴老娘给你穿衣服吗？","献给你，角长脸上的家伙。","你可真是臭气熏天啊。","爱舔疮痂的乞丐！","你的脸皮比城墙还厚。","滚蛋吧，满脸痘痘的蠢货。","看啊，那坨凄惨的分泌物。","我的敌人又蠢又弱。","滚开，又臭又丑的家伙！","死亡是你的归宿。","出来，畸形！","恶毒、腐烂的小便虫！","看呀，他的眼睛尿了。","死妈的小毛贼！","我要扎穿你的脸，恶棍！","晕尿的话痨。","你的蠢妈妈把你阉了吗？","你比地精还蠢！","你的丑陋无法用语言形容。","你怎么闻起来有胎盘的味道？","你这爱舔别人脚趾的蛆虫！","戴绿帽的老古董！","你这个肥肥马屁精！","你的刀像猪睾丸一样锋利。","你的嘴比屁股还大，屎比唾沫还多。","你这坨散发恶臭的大粪！","哈！是一坨粪球！","打扮好点 —— 鬼婆来招人了。","是豺狼人把你的脸吃了又拉出来了啊？","你这溃烂的脓包！","满身臭味的垃圾！","你这过街老鼠！","看哪， 蠢材中的蠢材。","你这坏死的木桩子！","滚蛋吧，满脸痘痘的疯子。","你比腐烂的鱼还臭！","我的人生，第12章，无聊的对手...","你这尿频尿急的神经病","你这连蟑螂都瞧不起的小丑。","你个笨蛋。","喜欢舔疮痂的流浪汉！","滚开，你臭死我了！","一份薄礼，献给最讨厌的邻居。","畜生！","大便之王，粪坑之主！","你的无趣能让精灵睡着！","滚蛋吧，脓包。","你的脑量连喂饱虱子都不够。","臭气熏天的脓包。","你比烤肉还油腻。","你这可恶的水泡 —— 我要刺穿你。","你这畸形的小肿囊！","就连地狱生物也会被你的臭味熏倒。","是哪头狼把你给吐出来的？","你的机智都快赶上水桶了！","你的脑袋就和催债人的钱包一样空空如也。","你装得像个战士，但傻子终究是傻子。","没用的废物！","被狼操的家伙！","看啊！是伊尔明斯特的蛋毛！","老色胚！","狡猾的变态狂！","现在是夏天吗？你怎么汗流浃背啊。","你这短腿动物！","好一条肥硕的沼泽蛆虫！","你妈是被瘟疫老鼠操了吗？","你爸真的不是比目鱼吗？","没用的胆小鬼！","无能狂怒你最会！","人傻话多的家伙！","邋遢的流氓！","你这残疾猩猩！","注意了，这个垃圾谎话连篇。","软弱的蠕虫！","你这虱子，你这螨虫！","注意这个自我膨胀的家伙！","我们还是不要认识的好。","羊皮纸糊出来的喽啰。","你污染了我的眼睛和鼻孔。","打你会弄脏我的手。","兵人玩具都比你厉害。","地狱闻到你的恶臭都要作呕。","你怎么闻起来一股胎盘的味道？","你爸不是比目鱼吗？","肮脏的孽畜！","看呀，他的眼睛漏尿了。","满身臭虫的垃圾！","爱舔别人脚趾的蛆虫！","你这个大腹便便、浑身化脓的马屁精！","浑身坏疽的残渣！","人傻话多！","看啊！是伊尔明斯特的蛋毛！","球形饭桶。","杂种小毛贼！","滚开，你的恶臭把我眼泪都熏出来了！","浑身尿骚味的老顽固。","听好了！你是一坨粪球！","你的无聊能让精灵睡着！","你比烤座狼肉还油腻。","你是肿囊。你是畸形的肉瘤。"]
Vicious_Mockery_list_EN=["Back to the anus that spat you out.","Which worg upchucked you?","Thou art saucy as gruel.","It vexes me to know of you.","Hag-shouldered scum-vestige.","Thou pyrite-loving tit.","Your breath'd kill the dead twice over.","Wetter than a ten-tongued tarpon!","Pus-supping maggot.","Away, you pox'd nun!","Thou roach-mocked jester.","Thou latrine-loving leper!","Your body's a temple - to an idiot god.","Shall I compare thee to a sow's fart?","Behold, a most noisy cuck!","Twit, twat, twerp.","As the leg, you'll end in defeat.","Thou inglorious hog.","Spurious prune-tart.","An ode for you? Odour, mayhaps.","Tape your bottom-mouth shut.","Thou goblin-goo-gobbler!","Poisonous, necrotic appendage.","Didst your idiot mother beclothe you?","For you, oh horned cheek.","There's a hag-pit stench about you.","Scab-licking vagrant!","Thick as a glob of unguent.","Begone, pox-faced loon.","There - a miserable pile of secretion.","How flaccid is my foolish foe.","Begone, putrid boil!","Death becomes you.","Out, foul deformity!","Pernicious, putrefying pissant!","Thine eyes - pools of tepid piss.","Thou art a hairy-hearted whoreson!","Prick thy face, villainous prick!","Piss-addled pontificator.","Didst your idiot mother beclothe you?","Thou goblin-goo-gobbler!","You've a visage fit for letter-writing.","Why smell thou of placenta-musk?","Toenail-tasting trouthole!","Cuckold-courting curmudgeon!","You gorbellied, purulent horse-ass!","Sharp as a pig's testicle.","Mouthier than an arse, twice as full o' shite.","You're dung-pretty and scented to wit!","Hark! A dung golem!","Dress thy face - the hags are hiring.","Gnoll eat your face and shit it out?","You festering bubo!","Lice-ridden cur!","Thou quivering plague rat!","Behold, the fool of fools.","Thou necrotic stump!","Begone, pox-faced loon.","Thou fetid fish, thou rancid shark!","My Life, Part 12, The Boring Opponent...","Thou latrine-loving leper!","Thou roach-mocked jester.","You spherical git.","Scab-licking vagrant!","Away, eye-watering stench!","A gift for a loathsome neighbour.","Feculent beast!","Majesty of manure, sovereign of shit!","You could send an elf to sleep!","Get thee gone, custardous discharge.","You've barely brain to feed a louse.","Rank, malodorous pustule.","You're greasier than a worg-roast.","You're a vile blister - I shall prick thee.","You cyst. You misshapen flesh-lump.","Even Hell'd gag on your bedevilled stench.","Which worg upchucked you?","Barrel-sharp, the wit on you.","Your head's empty as a debtor's purse.","You act a fighter, but a fool's a fool.","Lily-lunged limpet-luster!","Worg-rutting wrong-wrinkler!","Behold! Elminster's ball-bag.","Love-limb of a lecherous lich!","Poxy pissered pervert!","Like a summer's day - thou art sweaty.","Thou bandy-legged brindle-hole!","Burgeoning bog-botherer!","Didst thou mother sex a plague-rat?","Was't your father a flounder?","Clag-bottomed coward!","Pizzled rancour!","Limp-witted slick-licker.","Crusty rogue.","Threadbare chimp-lackey!","Note this trunk of lies.","Fudge-fondling fustilarian!","You louse, you mite!","Regard this spontaneous flatulater!","We'd make better strangers.","Parchment-pallored villain.","You infect mine eyes and nostrils.","Beating thee would soil my hands.","Sod this for a game of soldiers.","Even Hell'd gag on your bedevilled stench.","Why smell thou of placenta-musk?","Was't your father a flounder?","Feculent beast!","Thine eyes - pools of tepid piss.","Lice-ridden cur!","Toenail-tasting trouthole!","You gorbellied, purulent horse-ass!","Thou necrotic stump!","Limp-witted slick-licker.","Behold! Elminster's ballbag.","You spherical git.","Thou art a hairy-hearted whoreson!","Away, eye-watering stench!","Piss-addled pontificator.","Hark! A dung golem!","You could send an elf to sleep!","You're greasier than a worg-roast.","You cyst. You misshapen flesh-lump."]
const result_ViciousMockery = document.getElementById("result_ViciousMockery")//掷骰结果
function roll_ViciousMockery() {
    //随机并显示
    result_ViciousMockery.innerHTML = '';
    t_random = Math.floor(Math.random()*Vicious_Mockery_list_CN.length)
    if (Vicious_Mockery_list_CN.length = Vicious_Mockery_list_EN.length) {
        result_ViciousMockery.innerHTML =  Vicious_Mockery_list_CN[t_random] + "    #    " + Vicious_Mockery_list_EN[t_random];
    } else {
        result_ViciousMockery.innerHTML =  Vicious_Mockery_list_CN[t_random] //防止中英文不匹配
    }
    //振动效果
    result_ViciousMockery.classList.add('shake')//这段代码来自https://blog.csdn.net/qq_39147299/article/details/126726159 
    setTimeout(() => { result_ViciousMockery.classList.remove('shake') }, 500)
}
Bard_6.addEventListener('click', roll_ViciousMockery)




//子职显示功能
const No_College = document.getElementById("No_College")
const Button_Spirits_College = document.getElementById("Spirits_College")
const Button_Creation_College = document.getElementById("Creation_College")
const Button_Lore_College = document.getElementById("Lore_College")
const Button_Dance_College = document.getElementById("Dance_College")

const Spirits_College = document.querySelector(".Spirits_College")
const Creation_College = document.querySelector(".Creation_College")
const Lore_College = document.querySelector(".Lore_College")
const Dance_College = document.querySelector(".Dance_College")

function disappear_colleges(){    //隐藏所有函数，然后每个学院都是先隐藏所有，再出现该学院。
    Spirits_College.classList.add('hidden');
    Creation_College.classList.add('hidden');
    Lore_College.classList.add('hidden');
    Dance_College.classList.add('hidden');
}

No_College.addEventListener('click', disappear_colleges)

Button_Spirits_College.addEventListener('click', function(){
    disappear_colleges();
    Spirits_College.classList.remove('hidden') ;
})
Button_Creation_College.addEventListener('click', function(){
    disappear_colleges();
    Creation_College.classList.remove('hidden') ;
})
Button_Lore_College.addEventListener('click', function(){
    disappear_colleges();
    Lore_College.classList.remove('hidden') ;
})
Button_Dance_College.addEventListener('click', function(){
    disappear_colleges();
    Dance_College.classList.remove('hidden') ;
})

//最后默认显示其中一个学院，选精魂学院。
disappear_colleges();
Spirits_College.classList.remove('hidden')



//精魂学院 College of Spirits
//投掷一次精魂故事表
const Spirits_0 = document.getElementById('Spirits_0');//按钮——骰子
const row_roll_SpiritTales = document.querySelector(".roll_SpiritTales")//整行
const result_SpiritTales = document.getElementById("result_SpiritTales")//掷骰结果
function roll_SpiritTales() {
    //随机并显示
    result_SpiritTales.innerHTML = '';
    result_SpiritTales.innerHTML = 'D12 = '+ Math.floor(Math.random()*12+1);
    //振动效果
    row_roll_SpiritTales.classList.add('shake')//这段代码来自https://blog.csdn.net/qq_39147299/article/details/126726159 
    setTimeout(() => { row_roll_SpiritTales.classList.remove('shake') }, 500)
}
//可能的解决方案 https://blog.csdn.net/sinat_41747081/article/details/90577971
Spirits_0.addEventListener('click', roll_SpiritTales)
Spirits_0.addEventListener('click', PlayMusic)

const MusicList_Spirits = [
    ['FGO.mp3','金色传说.mp3','吸血鬼幸存者开箱.mp3','戏说不是胡说.mp3'],//0是抽卡音效
    ['神奇宝贝.mp3','数码宝贝.mp3','神奇海螺.mp3','芝士雪豹.mp3'],//从这里开始是Tale-1
    ['游戏王.mp3','我要打十个.mp3','给他两耳光.mp3'],
    ['火影忍者.mp3','朋友一生一辈子.mp3'],
    ['jojo2逃跑.mp3','崩撤卖溜.mp3'],
    ['我跳出来了，我又跳回去了.mp3','JohnWick.mp3'],
    ['旷野之息_传送.mp3','旷野之息_发现秘密.mp3','到达世界最高城.mp3'],
    ['我赌你的枪里没有子弹.mp3','Hail_Hydra.mp3','NeverGonnaGiveYouUp.mp3','树上骑个猴.mp3','队长别开枪是我.mp3'],
    ['我要发动我的技能潜行.mp3','刺客信条.mp3'],
    ['斯巴达.mp3','鬼泣_维吉尔.mp3','乌拉.mp3'],
    ['我即大灾变.mp3','史矛革.mp3'],
    ['英雄不朽.mp3','开始话疗.mp3'],
    ['Tekeli-li.mp3','十倍甚至九倍.mp3','黑人抬棺.mp3']    
    ]
//绑定元素
const Spirits_1 = document.getElementById('Spirits_1');
const Spirits_2 = document.getElementById('Spirits_2');
const Spirits_3 = document.getElementById('Spirits_3');
const Spirits_4 = document.getElementById('Spirits_4');
const Spirits_5 = document.getElementById('Spirits_5');
const Spirits_6 = document.getElementById('Spirits_6');
const Spirits_7 = document.getElementById('Spirits_7');
const Spirits_8 = document.getElementById('Spirits_8');
const Spirits_9 = document.getElementById('Spirits_9');
const Spirits_10 = document.getElementById('Spirits_10');
const Spirits_11 = document.getElementById('Spirits_11');
const Spirits_12 = document.getElementById('Spirits_12');
//添加函数响应
Spirits_1.addEventListener('click', PlayMusic)
Spirits_2.addEventListener('click', PlayMusic)
Spirits_3.addEventListener('click', PlayMusic)
Spirits_4.addEventListener('click', PlayMusic)
Spirits_5.addEventListener('click', PlayMusic)
Spirits_6.addEventListener('click', PlayMusic)
Spirits_7.addEventListener('click', PlayMusic)
Spirits_8.addEventListener('click', PlayMusic)
Spirits_9.addEventListener('click', PlayMusic)
Spirits_10.addEventListener('click', PlayMusic)
Spirits_11.addEventListener('click', PlayMusic)
Spirits_12.addEventListener('click', PlayMusic)




//创造学院 College of Creation

const MusicList_Creation = [
    [],//0无音效
    ['烤面筋.mp3','掀起波澜.mp3','像一颗尘土.mp3'],
    ['大力出奇迹.mp3','刘翔.mp3','美国队长_我可以打一天.mp3','神探夏洛克.mp3','PerceptionCheck.mp3','美丽不打折.mp3'],
    ['雷公助我.mp3','通辽偷袭.mp3'],
    ['冬泳怪鸽_微笑面对困难.mp3','黑神话_铜头铁臂.mp3'],
    ['哆啦A梦.mp3','妙妙工具.mp3'],
    ['我柜子动了.mp3','见证奇迹的时刻.mp3']
    ]
//绑定元素
const Creation_1 = document.getElementById('Creation_1');
const Creation_2 = document.getElementById('Creation_2');
const Creation_3 = document.getElementById('Creation_3');
const Creation_4 = document.getElementById('Creation_4');
const Creation_5 = document.getElementById('Creation_5');
const Creation_6 = document.getElementById('Creation_6');
//添加函数响应
Creation_1.addEventListener('click', PlayMusic)
Creation_2.addEventListener('click', PlayMusic)
Creation_3.addEventListener('click', PlayMusic)
Creation_4.addEventListener('click', PlayMusic)
Creation_5.addEventListener('click', PlayMusic)
Creation_6.addEventListener('click', PlayMusic)



//逸闻学院 College ofLore

const MusicList_Lore = [
    [],//0无音效
    ['不要再打了.mp3','我宣布个事.mp3','RNM退钱.mp3','意大利面拌42号混凝土.mp3','howdareyou.mp3'],
    ['哪里不会点哪里.mp3','遥遥领先.mp3']
    ]
//绑定元素
const Lore_1 = document.getElementById('Lore_1');
const Lore_2 = document.getElementById('Lore_2');
//添加函数响应
Lore_1.addEventListener('click', PlayMusic)
Lore_2.addEventListener('click', PlayMusic)



//舞蹈学院 College of Dance
const MusicList_Dance = [
    [],//0无音效
    ['Beat_it.mp3','多冷的隆冬.mp3','广播体操.mp3','极乐净土.mp3','四小天鹅.mp3','斗牛进行曲.mp3','探戈.mp3'],
    ['南拳和北腿.mp3','沙包大的拳头.mp3'],
    ['表情悠哉跳个大概.mp3','其实我是演员.mp3','艺术细胞.mp3'],
    ['头文字D.mp3','最炫民族风.mp3','没病走两步.mp3','我的滑板鞋.mp3'], 
    ['readygo.mp3','你要跳舞吗.mp3'],
    ['一起摇摆.mp3','醉拳.mp3','左手右手一个慢动作.mp3']
    ]
//绑定元素
const Dance_1 = document.getElementById('Dance_1');
const Dance_2 = document.getElementById('Dance_2');
const Dance_3 = document.getElementById('Dance_3');
const Dance_4 = document.getElementById('Dance_4');
const Dance_5 = document.getElementById('Dance_5');
const Dance_6 = document.getElementById('Dance_6');
//添加函数响应
Dance_1.addEventListener('click', PlayMusic)
Dance_2.addEventListener('click', PlayMusic)
Dance_3.addEventListener('click', PlayMusic)
Dance_4.addEventListener('click', PlayMusic)
Dance_5.addEventListener('click', PlayMusic)
Dance_6.addEventListener('click', PlayMusic)