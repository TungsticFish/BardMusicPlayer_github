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
        MusicList = Bard_Spirits;
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





//精魂诗人 College of Spirits

//投掷一次精魂故事表
const Spirits_0 = document.getElementById('Spirits_0');//按钮——骰子
const row_roll_SpiritTales = document.querySelector(".roll_SpiritTales")//整行
const result_SpiritTales = document.getElementById("result_SpiritTales")//掷骰结果
function roll_SpiritTales() {
    //随机并显示
    result_SpiritTales.innerHTML = "";
    result_SpiritTales.innerHTML = 'D12 = '+ Math.floor(Math.random()*12+1);
    //振动效果
    row_roll_SpiritTales.classList.add('shake')//这段代码来自https://blog.csdn.net/qq_39147299/article/details/126726159 
    setTimeout(() => { row_roll_SpiritTales.classList.remove('shake') }, 500)
}
//可能的解决方案 https://blog.csdn.net/sinat_41747081/article/details/90577971
Spirits_0.addEventListener('click', roll_SpiritTales)
Spirits_0.addEventListener('click', PlayMusic)




//手动输入歌曲列表。不能有中文
//似乎可以通过github的api获取repo中子目录的内容列表。https://api.github.com/repos/solomonxie/gists/contents/目录名。但是比较麻烦。
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

const Spirits_1 = document.getElementById('Spirits_1');//按钮——放歌
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






