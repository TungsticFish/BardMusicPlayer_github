// JavaScript source code


//�ֶ������ļ���ַ������������
const MusicList = [
    ['FGO.mp3','GoldenLegend.mp3'],//d0�ǳ鿨��Ч
    ['Pokemon.mp3'],//�����￪ʼ��d1
    ['Yu-Gi-Oh!.mp3'],
    ['NARUTO.mp3'],
    ['jojo2.mp3'],
    ['JiuPingZhiMaGuan.mp3'],
    ['ZeldaQuickMoving.mp3','BOTW_Secret.wav'],
    ['NoBulletInGun.mp3'],
    ['COC_Sneak.mp3'],
    ['ThisisSpata.mp3'],
    ['DaZaiBian.mp3'],
    ['HeroisNeverDie.mp3'],
    ['Tekeli-li.mp3']    
    ]




//roll D12��Ͷ��һ�ξ�����±�
const row_roll_SpiritTales = document.querySelector(".roll_SpiritTales")//����
const d0 = document.getElementById("d0")//��ť��������
const result_SpiritTales = document.getElementById("result_SpiritTales")//���

function roll() {
    //�������ʾ
    result_SpiritTales.innerHTML = "";
    result_SpiritTales.innerHTML = 'D12 = '+ Math.floor(Math.random()*12+1);
    //��Ч��
    row_roll_SpiritTales.classList.add('shake')//��δ�������https://blog.csdn.net/qq_39147299/article/details/126726159 
    setTimeout(() => { row_roll_SpiritTales.classList.remove('shake') }, 500)
}
//���ܵĽ������ https://blog.csdn.net/sinat_41747081/article/details/90577971
d0.addEventListener('click', roll)
d0.addEventListener('click', PlayMusic)



//������ֵ���������ļ����������BGM
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
    //��������
    //console.log(this['id']);
    let RandomNumber = Math.floor(Math.random() * MusicList[this['id'].slice(1)].length)//array.slice(start, end)���û��ָ��end,��ô�зֵ���������� start ���������������Ԫ�ء�
    let audioElement = new Audio('./assets/music'+this['id'].slice(1)+'/'+MusicList[this['id'].slice(1)][RandomNumber]);    
	audioElement.play();    
    //��Ч��
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





