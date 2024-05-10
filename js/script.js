// JavaScript source code


//手动输入文件地址，不能有中文
const MusicList = [
    ['FGO.mp3','GoldenLegend.mp3'],//d0是抽卡音效
    ['Pokemon.mp3','DigitalMonsters.mp3'],//从这里开始是d1
    ['Yu-Gi-Oh!.mp3','liangerguang.mp3'],
    ['NARUTO.mp3','pengyou.mp3'],
    ['jojo2.mp3','bengchemailiu.mp3'],
    ['JiuPingZhiMaGuan.mp3','JohnWick.mp3'],
    ['ZeldaQuickMoving.mp3','BOTW_Secret.wav','litang.mp3'],
    ['NoBulletInGun.mp3','Hail_Hydra.mp3'],
    ['COC_Sneak.mp3'],
    ['ThisisSpata.mp3','Vergil.mp3'],
    ['DaZaiBian.mp3','Smaug.mp3'],
    ['HeroisNeverDie.mp3','hualiao.mp3'],
    ['Tekeli-li.mp3','zhugeliang.mp3']    
    ]




//roll D12，投掷一次精魂故事表
const row_roll_SpiritTales = document.querySelector(".roll_SpiritTales")//整行
const d0 = document.getElementById("d0")//按钮——骰子
const result_SpiritTales = document.getElementById("result_SpiritTales")//结果

function roll() {
    //随机并显示
    result_SpiritTales.innerHTML = "";
    result_SpiritTales.innerHTML = 'D12 = '+ Math.floor(Math.random()*12+1);
    //振动效果
    row_roll_SpiritTales.classList.add('shake')//这段代码来自https://blog.csdn.net/qq_39147299/article/details/126726159 
    setTimeout(() => { row_roll_SpiritTales.classList.remove('shake') }, 500)
}
//可能的解决方案 https://blog.csdn.net/sinat_41747081/article/details/90577971
d0.addEventListener('click', roll)
d0.addEventListener('click', PlayMusic)



//根据骰值，播放其文件夹下随机的BGM
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');
const d7 = document.getElementById('d7');
const d8 = document.getElementById('d8');
const d9 = document.getElementById('d9');
const d10 = document.getElementById('d10');
const d11 = document.getElementById('d11');
const d12 = document.getElementById('d12');



function PlayMusic() {    
    //播放音乐
    //console.log(this['id']);
    let RandomNumber = Math.floor(Math.random() * MusicList[this['id'].slice(1)].length)//array.slice(start, end)如果没有指定end,那么切分的数组包含从 start 到数组结束的所有元素。
    let audioElement = new Audio('./assets/music'+this['id'].slice(1)+'/'+MusicList[this['id'].slice(1)][RandomNumber]);    
	audioElement.play();    
    //振动效果
    this.classList.add('shake')
    setTimeout(() => { this.classList.remove('shake') }, 200)

}

d1.addEventListener('click', PlayMusic)
d2.addEventListener('click', PlayMusic)
d3.addEventListener('click', PlayMusic)
d4.addEventListener('click', PlayMusic)
d5.addEventListener('click', PlayMusic)
d6.addEventListener('click', PlayMusic)
d7.addEventListener('click', PlayMusic)
d8.addEventListener('click', PlayMusic)
d9.addEventListener('click', PlayMusic)
d10.addEventListener('click', PlayMusic)
d11.addEventListener('click', PlayMusic)
d12.addEventListener('click', PlayMusic)





