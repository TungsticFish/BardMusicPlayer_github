// JavaScript source code

    /*������ʲôѧԺ������or��ְ����or����
    Bard-��ְ
    Lore-����
    Valor-����
    Glamour-�Ի�
    Swords-����
    Whispers-����
    Creation-����
    Eloquence-�۱�
    Spirits_����
    Others-����
    */




//���ĺ��������ֲ���
function PlayMusic() {    
    //��������
    //ѡ�������б�
    switch (this['id'].split('_')[0]) {
        case 'Bard':
        MusicList = MusicList_Bard;
        break;
        case 'Spirits':
        MusicList = MusicList_Spirits;
        break;
    }
    
    //ѡ���б��е�����
    let RandomNumber = Math.floor(Math.random() * MusicList[this['id'].split('_')[1]].length);
    //console.log(RandomNumber)
    let audioElement = new Audio('./assets/'+ this['id'].split('_')[0] +'/music'+this['id'].split('_')[1]+'/'+MusicList[this['id'].split('_')[1]][RandomNumber]);    
	audioElement.play();    
    //��Ч����0.2��
    this.classList.add('shake')
    setTimeout(() => { this.classList.remove('shake') }, 200)
}



//ʫ�˱�ְ

//�ֶ���������б�����������
//�ƺ�����ͨ��github��api��ȡrepo����Ŀ¼�������б�https://api.github.com/repos/solomonxie/gists/contents/Ŀ¼�������ǱȽ��鷳��
const MusicList_Bard = [
    [''],//0-�յģ����濪ʼ�Ǳ�ְ����
    ['youcandoanything.mp3'],//1-ʫ�˼���
    ['Trump.mp3'],//2-����ͨ
    ['3dianyincha.mp3'],//3-�����
    ['CalmDown.mp3']//4-���Ի�    
    ]


//��Ԫ��
const Bard_1 = document.getElementById('Bard_1');
const Bard_2 = document.getElementById('Bard_2');
const Bard_3 = document.getElementById('Bard_3');
const Bard_4 = document.getElementById('Bard_4');
//��Ӻ�����Ӧ
Bard_1.addEventListener('click', PlayMusic)
Bard_2.addEventListener('click', PlayMusic)
Bard_3.addEventListener('click', PlayMusic)
Bard_4.addEventListener('click', PlayMusic)








//����ʫ�� College of Spirits

//Ͷ��һ�ξ�����±�
const Spirits_0 = document.getElementById('Spirits_0');//��ť��������
const row_roll_SpiritTales = document.querySelector(".roll_SpiritTales")//����
const result_SpiritTales = document.getElementById("result_SpiritTales")//�������
function roll_SpiritTales() {
    //�������ʾ
    result_SpiritTales.innerHTML = "";
    result_SpiritTales.innerHTML = 'D12 = '+ Math.floor(Math.random()*12+1);
    //��Ч��
    row_roll_SpiritTales.classList.add('shake')//��δ�������https://blog.csdn.net/qq_39147299/article/details/126726159 
    setTimeout(() => { row_roll_SpiritTales.classList.remove('shake') }, 500)
}
//���ܵĽ������ https://blog.csdn.net/sinat_41747081/article/details/90577971
Spirits_0.addEventListener('click', roll_SpiritTales)
Spirits_0.addEventListener('click', PlayMusic)




//�ֶ���������б�����������
const MusicList_Spirits = [
    ['FGO.mp3','GoldenLegend.mp3'],//0�ǳ鿨��Ч
    ['Pokemon.mp3','DigitalMonsters.mp3','MagicConch.mp3','xuebao.mp3'],//�����￪ʼ��Tale-1
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

//��Ԫ��
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
//��Ӻ�����Ӧ
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






