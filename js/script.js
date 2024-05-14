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
    Spirits_精魂
    Others-其他
    */




//核心函数，音乐播放
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
    }
    
    //选择列表中的音乐
    let RandomNumber = Math.floor(Math.random() * MusicList[this['id'].split('_')[1]].length);
    //console.log(RandomNumber)
    let audioElement = new Audio('./assets/'+ this['id'].split('_')[0] +'/music'+this['id'].split('_')[1]+'/'+MusicList[this['id'].split('_')[1]][RandomNumber]);    
	audioElement.play();    
    //振动效果，0.2秒
    this.classList.add('shake')
    setTimeout(() => { this.classList.remove('shake') }, 200)
}



//诗人本职

//手动输入歌曲列表。不能有中文
//似乎可以通过github的api获取repo中子目录的内容列表。https://api.github.com/repos/solomonxie/gists/contents/目录名。但是比较麻烦。
const MusicList_Bard = [
    [''],//0-空的，下面开始是本职技能
    ['youcandoanything.mp3'],//1-诗人激励
    ['Trump.mp3'],//2-万事通
    ['3dianyincha.mp3'],//3-休憩曲
    ['CalmDown.mp3']//4-反迷惑    
    ]


//绑定元素
const Bard_1 = document.getElementById('Bard_1');
const Bard_2 = document.getElementById('Bard_2');
const Bard_3 = document.getElementById('Bard_3');
const Bard_4 = document.getElementById('Bard_4');
//添加函数响应
Bard_1.addEventListener('click', PlayMusic)
Bard_2.addEventListener('click', PlayMusic)
Bard_3.addEventListener('click', PlayMusic)
Bard_4.addEventListener('click', PlayMusic)


//恶言相加专门
//恶言相加词库of博得之门3，来自https://ngabbs.com/read.php?tid=39108352
//因为显示中文有问题，感觉是js和html的编码不对付，这里的中文是用unicode编码的
Vicious_Mockery_list_CN=["\u77ee\uff0c\u632b\uff0c\u7a77\u3002","\u7231\u8214\u522b\u4eba\u811a\u8dbe\u7684\u86c6\u866b\uff01","\u7231\u8214\u75ae\u75c2\u7684\u4e5e\u4e10\uff01","\u80ae\u810f\u7684\u5b7d\u755c\uff01","\u88ab\u72fc\u64cd\u7684\u5bb6\u4f19\uff01","\u5175\u4eba\u73a9\u5177\u90fd\u6bd4\u4f60\u5389\u5bb3\u3002","\u81ed\u6c14\u718f\u5929\u7684\u8113\u5305\u3002","\u51fa\u6765\uff0c\u7578\u5f62\uff01","\u755c\u751f\uff01","\u6253\u626e\u597d\u70b9 \u2014\u2014 \u9b3c\u5a46\u6765\u62db\u4eba\u4e86\u3002","\u6253\u4f60\u4f1a\u5f04\u810f\u6211\u7684\u624b\u3002","\u5927\u4fbf\u4e4b\u738b\uff0c\u7caa\u5751\u4e4b\u4e3b\uff01","\u6234\u7eff\u5e3d\u7684\u8001\u53e4\u8463\uff01","\u5730\u72f1\u95fb\u5230\u4f60\u7684\u6076\u81ed\u90fd\u8981\u4f5c\u5455\u3002","\u6076\u6bd2\u3001\u8150\u70c2\u7684\u5c0f\u4fbf\u866b\uff01","\u8d76\u7d27\u7528\u80f6\u5e03\u628a\u5634\u5df4\u5c01\u8d77\u6765\u5427\u3002","\u9b3c\u5a46\u90fd\u4e0d\u642d\u7406\u7684\u4eba\u6e23\u3002","\u6eda\u86cb\u5427\uff0c\u6ee1\u8138\u75d8\u75d8\u7684\u8822\u8d27\u3002","\u6eda\u86cb\u5427\uff0c\u6ee1\u8138\u75d8\u75d8\u7684\u75af\u5b50\u3002","\u6eda\u86cb\u5427\uff0c\u8113\u5305\u3002","\u6eda\u56de\u4f60\u5988\u7684\u809b\u95e8\u91cc\u53bb\u5427\u3002","\u6eda\u5f00\uff0c\u4f60\u81ed\u6b7b\u6211\u4e86\uff01","\u6eda\u5f00\uff0c\u4f60\u7684\u6076\u81ed\u628a\u6211\u773c\u6cea\u90fd\u718f\u51fa\u6765\u4e86\uff01","\u6eda\u5f00\uff0c\u53c8\u81ed\u53c8\u4e11\u7684\u5bb6\u4f19\uff01","\u6eda\u8fdc\u70b9\uff0c\u4f60\u4e2a\u6ee1\u8138\u75d8\u5b50\u7684\u5b37\u5b37\uff01","\u54c8\uff01\u662f\u4e00\u5768\u7caa\u7403\uff01","\u8fd8\u8981\u4f60\u7684\u767d\u75f4\u8001\u5a18\u7ed9\u4f60\u7a7f\u8863\u670d\u5417\uff1f","\u597d\u4e00\u6761\u80a5\u7855\u7684\u6cbc\u6cfd\u86c6\u866b\uff01","\u574f\u6b7b\u7684\u8001\u6bd2\u7269\u3002","\u6d51\u8eab\u574f\u75bd\u7684\u6b8b\u6e23\uff01","\u6d51\u8eab\u5c3f\u9a9a\u5473\u7684\u8001\u987d\u56fa\u3002","\u72e1\u733e\u7684\u53d8\u6001\u72c2\uff01","\u5c31\u8fde\u5730\u72f1\u751f\u7269\u4e5f\u4f1a\u88ab\u4f60\u7684\u81ed\u5473\u718f\u5012\u3002","\u770b\u554a\uff01\u662f\u4f0a\u5c14\u660e\u65af\u7279\u7684\u86cb\u6bdb\uff01","\u770b\u554a\uff01\u662f\u4f0a\u5c14\u660e\u65af\u7279\u7684\u86cb\u6bdb\uff01","\u770b\u554a\uff0c\u90a3\u5768\u51c4\u60e8\u7684\u5206\u6ccc\u7269\u3002","\u770b\u54ea\uff0c \u8822\u6750\u4e2d\u7684\u8822\u6750\u3002","\u770b\u5440\uff0c\u4ed6\u7684\u773c\u775b\u6f0f\u5c3f\u4e86\u3002","\u770b\u5440\uff0c\u4ed6\u7684\u773c\u775b\u5c3f\u4e86\u3002","\u908b\u9062\u7684\u6d41\u6c13\uff01","\u8001\u8272\u80da\uff01","\u8fde\u87d1\u8782\u90fd\u77a7\u4e0d\u8d77\u7684\u5c0f\u4e11\u3002","\u6d41\u8113\u7684\u86c6\u3002","\u6ee1\u8eab\u81ed\u866b\u7684\u5783\u573e\uff01","\u6ee1\u8eab\u81ed\u5473\u7684\u5783\u573e\uff01","\u6ca1\u7528\u7684\u80c6\u5c0f\u9b3c\uff01","\u6ca1\u7528\u7684\u5e9f\u7269\uff01","\u4f60\u7238\u4e0d\u662f\u6bd4\u76ee\u9c7c\u5417\uff1f","\u4f60\u7238\u771f\u7684\u4e0d\u662f\u6bd4\u76ee\u9c7c\u5417\uff1f","\u4f60\u6bd4\u5730\u7cbe\u8fd8\u8822\uff01","\u4f60\u6bd4\u8150\u70c2\u7684\u9985\u997c\u8fd8\u81ed\u3002","\u4f60\u6bd4\u8150\u70c2\u7684\u9c7c\u8fd8\u81ed\uff01","\u4f60\u6bd4\u70e4\u8089\u8fd8\u6cb9\u817b\u3002","\u4f60\u6bd4\u70e4\u5ea7\u72fc\u8089\u8fd8\u6cb9\u817b\u3002","\u4f60\u7684\u4e11\u964b\u65e0\u6cd5\u7528\u8bed\u8a00\u5f62\u5bb9\u3002","\u4f60\u7684\u8822\u5988\u5988\u628a\u4f60\u9609\u4e86\u5417\uff1f","\u4f60\u7684\u5200\u50cf\u732a\u777e\u4e38\u4e00\u6837\u950b\u5229\u3002","\u4f60\u7684\u673a\u667a\u90fd\u5feb\u8d76\u4e0a\u6c34\u6876\u4e86\uff01","\u4f60\u7684\u8138\u76ae\u6bd4\u57ce\u5899\u8fd8\u539a\u3002","\u4f60\u7684\u8111\u888b\u5c31\u548c\u50ac\u503a\u4eba\u7684\u94b1\u5305\u4e00\u6837\u7a7a\u7a7a\u5982\u4e5f\u3002","\u4f60\u7684\u8111\u91cf\u8fde\u5582\u9971\u8671\u5b50\u90fd\u4e0d\u591f\u3002","\u4f60\u7684\u8eab\u677f\u5b50\u6bd4\u7a00\u7ca5\u8fd8\u5f31\u3002","\u4f60\u7684\u8eab\u4f53\u5c31\u662f\u4e00\u4e2a\u5e99\uff0c\u4f8d\u5949\u767d\u75f4\u4e4b\u795e\u7684\u5e99\u3002","\u4f60\u7684\u65e0\u804a\u80fd\u8ba9\u7cbe\u7075\u7761\u7740\uff01","\u4f60\u7684\u65e0\u8da3\u80fd\u8ba9\u7cbe\u7075\u7761\u7740\uff01","\u4f60\u7684\u5634\u6bd4\u5c41\u80a1\u8fd8\u5927\uff0c\u5c4e\u6bd4\u553e\u6cab\u8fd8\u591a\u3002","\u4f60\u4e2a\u7b28\u86cb\u3002","\u4f60\u5149\u547c\u5438\u80fd\u8ba9\u6b7b\u4eba\u6b7b\u4e24\u6b21\u4e86\u3002","\u4f60\u53ef\u771f\u662f\u81ed\u6c14\u718f\u5929\u554a\u3002","\u4f60\u5988\u662f\u88ab\u761f\u75ab\u8001\u9f20\u64cd\u4e86\u5417\uff1f","\u4f60\u662f\u80bf\u56ca\u3002\u4f60\u662f\u7578\u5f62\u7684\u8089\u7624\u3002","\u4f60\u6c61\u67d3\u4e86\u6211\u7684\u773c\u775b\u548c\u9f3b\u5b54\u3002","\u4f60\u600e\u4e48\u95fb\u8d77\u6765\u4e00\u80a1\u80ce\u76d8\u7684\u5473\u9053\uff1f","\u4f60\u600e\u4e48\u95fb\u8d77\u6765\u6709\u80ce\u76d8\u7684\u5473\u9053\uff1f","\u4f60\u8fd9\u7231\u8214\u522b\u4eba\u811a\u8dbe\u7684\u86c6\u866b\uff01","\u4f60\u8fd9\u6b8b\u75be\u7329\u7329\uff01","\u4f60\u8fd9\u77ed\u817f\u52a8\u7269\uff01","\u4f60\u8fd9\u4e2a\u5927\u8179\u4fbf\u4fbf\u3001\u6d51\u8eab\u5316\u8113\u7684\u9a6c\u5c41\u7cbe\uff01","\u4f60\u8fd9\u4e2a\u80a5\u80a5\u9a6c\u5c41\u7cbe\uff01","\u4f60\u8fd9\u8fc7\u8857\u8001\u9f20\uff01","\u4f60\u8fd9\u574f\u6b7b\u7684\u6728\u6869\u5b50\uff01","\u4f60\u8fd9\u9ec4\u94c1\u5976\u5934\uff01","\u4f60\u8fd9\u7578\u5f62\u7684\u5c0f\u80bf\u56ca\uff01","\u4f60\u8fd9\u89c1\u4e0d\u5f97\u4eba\u7684\u732a\u3002","\u4f60\u8fd9\u53ef\u6076\u7684\u6c34\u6ce1 \u2014\u2014 \u6211\u8981\u523a\u7a7f\u4f60\u3002","\u4f60\u8fd9\u6e83\u70c2\u7684\u8113\u5305\uff01","\u4f60\u8fd9\u8fde\u87d1\u8782\u90fd\u77a7\u4e0d\u8d77\u7684\u5c0f\u4e11\u3002","\u4f60\u8fd9\u5c3f\u9891\u5c3f\u6025\u7684\u795e\u7ecf\u75c5","\u4f60\u8fd9\u8671\u5b50\uff0c\u4f60\u8fd9\u87a8\u866b\uff01","\u4f60\u8fd9\u5768\u6563\u53d1\u6076\u81ed\u7684\u5927\u7caa\uff01","\u4f60\u88c5\u5f97\u50cf\u4e2a\u6218\u58eb\uff0c\u4f46\u50bb\u5b50\u7ec8\u7a76\u662f\u50bb\u5b50\u3002","\u5c3f\u9891\u5c3f\u6025\u7684\u9ebb\u5b50\uff01","\u77a7\uff0c\u597d\u4e00\u4e2a\u5471\u566a\u7684\u5012\u9709\u86cb\uff01","\u7403\u5f62\u996d\u6876\u3002","\u4eba\u50bb\u8bdd\u591a\uff01","\u4eba\u50bb\u8bdd\u591a\u7684\u5bb6\u4f19\uff01","\u8ba4\u8bc6\u4f60\u771f\u4ee4\u6211\u4f5c\u5455\u3002","\u8f6f\u5f31\u7684\u8815\u866b\uff01","\u5341\u6761\u9cb6\u9c7c\u52a0\u5728\u4e00\u8d77\u90fd\u6ca1\u4f60\u6e7f\uff01","\u662f\u8c7a\u72fc\u4eba\u628a\u4f60\u7684\u8138\u5403\u4e86\u53c8\u62c9\u51fa\u6765\u4e86\u554a\uff1f","\u662f\u54ea\u5934\u72fc\u628a\u4f60\u7ed9\u5410\u51fa\u6765\u7684\uff1f","\u662f\u54ea\u53ea\u5ea7\u72fc\u628a\u4f60\u56bc\u8fc7\u4e4b\u540e\u53c8\u5410\u51fa\u6765\u7684\uff1f","\u6b7b\u5988\u7684\u5c0f\u6bdb\u8d3c\uff01","\u6b7b\u4ea1\u662f\u4f60\u7684\u5f52\u5bbf\u3002","\u542c\u597d\u4e86\uff01\u4f60\u662f\u4e00\u5768\u7caa\u7403\uff01","\u541e\u5730\u7cbe\u5927\u4fbf\u7684\u5bb6\u4f19\uff01","\u6211\u7684\u654c\u4eba\u53c8\u8822\u53c8\u5f31\u3002","\u6211\u7684\u4eba\u751f\uff0c\u7b2c12\u7ae0\uff0c\u65e0\u804a\u7684\u5bf9\u624b...","\u6211\u4eec\u8fd8\u662f\u4e0d\u8981\u8ba4\u8bc6\u7684\u597d\u3002","\u6211\u8981\u624e\u7a7f\u4f60\u7684\u8138\uff0c\u6076\u68cd\uff01","\u65e0\u80fd\u72c2\u6012\u4f60\u6700\u4f1a\uff01","\u559c\u6b22\u8214\u75ae\u75c2\u7684\u6d41\u6d6a\u6c49\uff01","\u73b0\u5728\u662f\u590f\u5929\u5417\uff1f\u4f60\u600e\u4e48\u6c57\u6d41\u6d43\u80cc\u554a\u3002","\u732e\u7ed9\u4f60\uff0c\u89d2\u957f\u8138\u4e0a\u7684\u5bb6\u4f19\u3002","\u60f3\u8981\u6211\u6b4c\u9882\u4f60\u5417\uff1f\u53ea\u6709\u4f60\u8eab\u4e0a\u7684\u81ed\u5473\u503c\u5f97\u6b4c\u9882\u3002","\u7f8a\u76ae\u7eb8\u7cca\u51fa\u6765\u7684\u55bd\u5570\u3002","\u8981\u6211\u628a\u4f60\u548c\u6bcd\u732a\u7684\u5c41\u4f5c\u6bd4\u8f83\u5417\uff1f","\u4e00\u4efd\u8584\u793c\uff0c\u732e\u7ed9\u6700\u8ba8\u538c\u7684\u90bb\u5c45\u3002","\u6655\u5c3f\u7684\u8bdd\u75e8\u3002","\u6742\u79cd\u5c0f\u6bdb\u8d3c\uff01","\u6ce8\u610f\u4e86\uff0c\u8fd9\u4e2a\u5783\u573e\u8c0e\u8bdd\u8fde\u7bc7\u3002","\u6ce8\u610f\u8fd9\u4e2a\u81ea\u6211\u81a8\u80c0\u7684\u5bb6\u4f19\uff01","\u4f5c\u4e3a\u4e00\u4e2a\u62d6\u540e\u817f\u7684\uff0c\u4f60\u7684\u4e0b\u573a\u53ea\u6709\u5931\u8d25\u3002"]
Vicious_Mockery_list_EN=["Twit, twat, twerp.","Toenail-tasting trouthole!","Scab-licking vagrant!","Feculent beast!","Worg-rutting wrong-wrinkler!","Sod this for a game of soldiers.","Rank, malodorous pustule.","Out, foul deformity!","Feculent beast!","Dress thy face - the hags are hiring.","Beating thee would soil my hands.","Majesty of manure, sovereign of shit!","Cuckold-courting curmudgeon!","Even Hell'd gag on your bedevilled stench.","Pernicious, putrefying pissant!","Tape your bottom-mouth shut.","Hag-shouldered scum-vestige.","Begone, pox-faced loon.","Begone, pox-faced loon.","Get thee gone, custardous discharge.","Back to the anus that spat you out.","Away, eye-watering stench!","Away, eye-watering stench!","Begone, putrid boil!","Away, you pox'd nun!","Hark! A dung golem!","Didst your idiot mother beclothe you?","Burgeoning bog-botherer!","Poisonous, necrotic appendage.","Thou necrotic stump!","Piss-addled pontificator.","Poxy pissered pervert!","Even Hell'd gag on your bedevilled stench.","Behold! Elminster's ballbag.","Behold! Elminster's ball-bag.","There - a miserable pile of secretion.","Behold, the fool of fools.","Thine eyes - pools of tepid piss.","Thine eyes - pools of tepid piss.","Crusty rogue.","Love-limb of a lecherous lich!","Thou roach-mocked jester.","Pus-supping maggot.","Lice-ridden cur!","Lice-ridden cur!","Clag-bottomed coward!","Lily-lunged limpet-luster!","Was't your father a flounder?","Was't your father a flounder?","Thou goblin-goo-gobbler!","Spurious prune-tart.","Thou fetid fish, thou rancid shark!","You're greasier than a worg-roast.","You're greasier than a worg-roast.","You've a visage fit for letter-writing.","Didst your idiot mother beclothe you?","Sharp as a pig's testicle.","Barrel-sharp, the wit on you.","Thick as a glob of unguent.","Your head's empty as a debtor's purse.","You've barely brain to feed a louse.","Thou art saucy as gruel.","Your body's a temple - to an idiot god.","You could send an elf to sleep!","You could send an elf to sleep!","Mouthier than an arse, twice as full o' shite.","You spherical git.","Your breath'd kill the dead twice over.","There's a hag-pit stench about you.","Didst thou mother sex a plague-rat?","You cyst. You misshapen flesh-lump.","You infect mine eyes and nostrils.","Why smell thou of placenta-musk?","Why smell thou of placenta-musk?","Toenail-tasting trouthole!","Threadbare chimp-lackey!","Thou bandy-legged brindle-hole!","You gorbellied, purulent horse-ass!","You gorbellied, purulent horse-ass!","Thou quivering plague rat!","Thou necrotic stump!","Thou pyrite-loving tit.","You cyst. You misshapen flesh-lump.","Thou inglorious hog.","You're a vile blister - I shall prick thee.","You festering bubo!","Thou roach-mocked jester.","Thou latrine-loving leper!","You louse, you mite!","You're dung-pretty and scented to wit!","You act a fighter, but a fool's a fool.","Thou latrine-loving leper!","Behold, a most noisy cuck!","You spherical git.","Limp-witted slick-licker.","Limp-witted slick-licker.","It vexes me to know of you.","Fudge-fondling fustilarian!","Wetter than a ten-tongued tarpon!","Gnoll eat your face and shit it out?","Which worg upchucked you?","Which worg upchucked you?","Thou art a hairy-hearted whoreson!","Death becomes you.","Hark! A dung golem!","Thou goblin-goo-gobbler!","How flaccid is my foolish foe.","'My Life, Part 12, The Boring Opponent...'","We'd make better strangers.","Prick thy face, villainous prick!","Pizzled rancour!","Scab-licking vagrant!","Like a summer's day - thou art sweaty.","For you, oh horned cheek.","An ode for you? Odour, mayhaps.","Parchment-pallored villain.","Shall I compare thee to a sow's fart?","A gift for a loathsome neighbour.","Piss-addled pontificator.","Thou art a hairy-hearted whoreson!","Note this trunk of lies.","Regard this spontaneous flatulater!","As the leg, you'll end in defeat."]

const Bard_5 = document.getElementById('Bard_5');//按钮——骰子
const result_ViciousMockery = document.getElementById("result_ViciousMockery")//掷骰结果
function roll_ViciousMockery() {
    //随机并显示
    result_ViciousMockery.innerHTML = '';
    t_random = Math.floor(Math.random()*Vicious_Mockery_list_CN.length)
    if (Vicious_Mockery_list_CN.length = Vicious_Mockery_list_EN.length) {
        result_ViciousMockery.innerHTML = '\u6076\u6bd2\u5632\u7b11\u53f0\u8bcd\u7075\u611f\uff1a '+ Vicious_Mockery_list_CN[t_random] + "    #    " + Vicious_Mockery_list_EN[t_random];
    } else {
        result_ViciousMockery.innerHTML = '\u6076\u6bd2\u5632\u7b11\u53f0\u8bcd\u7075\u611f\uff1a '+ Vicious_Mockery_list_CN[t_random] //防止中英文不匹配
    }
    //振动效果
    result_ViciousMockery.classList.add('shake')//这段代码来自https://blog.csdn.net/qq_39147299/article/details/126726159 
    setTimeout(() => { result_ViciousMockery.classList.remove('shake') }, 500)
}
Bard_5.addEventListener('click', roll_ViciousMockery)




//子职显示功能

const No_College = document.getElementById("No_College")
const Button_Spirits_College = document.getElementById("Spirits_College")


const Spirits_College = document.querySelector(".Spirits_College")


//应该写一个隐藏所有，然后每个学院都是先隐藏所有，再出现该学院。

function disappear_colleges(){
    Spirits_College.classList.add('hidden');
}


No_College.addEventListener('click', disappear_colleges)

Button_Spirits_College.addEventListener('click', function(){
    disappear_colleges();
    Spirits_College.classList.remove('hidden') ;
})




//精魂诗人 College of Spirits

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




//手动输入歌曲列表。不能有中文
const MusicList_Spirits = [
    ['FGO.mp3','GoldenLegend.mp3'],//0是抽卡音效
    ['Pokemon.mp3','DigitalMonsters.mp3','MagicConch.mp3','xuebao.mp3'],//从这里开始是Tale-1
    ['Yu-Gi-Oh!.mp3','liangerguang.mp3'],
    ['NARUTO.mp3','pengyou.mp3'],
    ['jojo2.mp3','bengchemailiu.mp3'],
    ['JiuPingZhiMaGuan.mp3','JohnWick.mp3'],
    ['ZeldaQuickMoving.mp3','BOTW_Secret.wav','litang.mp3'],
    ['NoBulletInGun.mp3','Hail_Hydra.mp3','NeverGonnaGiveYouUp.mp3','MonkeyonTree.mp3','dontshotme.mp3'],
    ['COC_Sneak.mp3','AssassinsCreed.mp3'],
    ['ThisisSpata.mp3','Vergil.mp3','wula.mp3'],
    ['DaZaiBian.mp3','Smaug.mp3'],
    ['HeroisNeverDie.mp3','hualiao.mp3'],
    ['Tekeli-li.mp3','zhugeliang.mp3','TenEvenNineTimes.mp3']    
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









