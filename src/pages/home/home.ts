import { Component } from '@angular/core';
import { NavController ,LoadingController,ActionSheetController ,AlertController } from 'ionic-angular';
import {LoginPage} from "../../pages/login/login";
import {ToastController} from "ionic-angular"

//noinspection TypeScriptCheckImport
import * as Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage;
  list = ["tom",'jeck'];
  constructor(
    public navCtrl: NavController,
    public loading: LoadingController,
    public ActionSheet: ActionSheetController ,
    public Alert: AlertController ,
    public toast:ToastController
  ) {
    this.loginPage = LoginPage;

  }
  goLogin(){
    this.navCtrl.push(this.loginPage)
  }
  showToast(){
    let toast = this.toast.create({
      message:"超市",
      //duration:100000,
      cssClass:'mytoast',
      showCloseButton:true
    });
    toast.present()
  }
  presentLoading() {
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  showToastClose(){
    const actionSheet = this.ActionSheet.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  showAlert() {
    const alert = this.Alert.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad(){
    //var chart = Highcharts.chart('container', {
    //  chart: {
    //    type: 'pie',
    //    options3d: {
    //      enabled: true,
    //      alpha: 45,
    //      beta: 0
    //    }
    //  },
    //  title: {
    //    text: '2014年某网站不同浏览器访问量占比'
    //  },
    //  tooltip: {
    //    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //  },
    //  plotOptions: {
    //    pie: {
    //      allowPointSelect: true,
    //      cursor: 'pointer',
    //      depth: 35,
    //      dataLabels: {
    //        enabled: false,
    //        format: '{point.name}'
    //      }
    //    }
    //  },
    //  series: [{
    //    type: 'pie',
    //    name: '浏览器占比',
    //    data: [
    //      ['Firefox',   45.0],
    //      ['IE',       26.8],
    //      {
    //        name: 'Chrome',
    //        y: 12.8,
    //        sliced: true,
    //        selected: true
    //      },
    //      ['Safari',    8.5],
    //      ['Opera',     6.2],
    //      ['Others',   0.7]
    //    ],
    //    showInLegend: true
    //  }]
    //});
    //
    //
    ////chart1 = new Highcharts(<any>{})
    //var option:any= {
    //  chart: {
    //    type: 'column'
    //  },
    //  title: {
    //    text: '按性别划分的水果消费总量'
    //  },
    //  xAxis: {
    //    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
    //  },
    //  yAxis: {
    //    allowDecimals: false,
    //    min: 0,
    //    title: {
    //      text: '水果数量'
    //    }
    //  },
    //  tooltip: {
    //    formatter: function () {
    //      return '<b>' + this.x + '</b><br/>' +
    //        this.series.name + ': ' + this.y + '<br/>' +
    //        '总量: ' ;
    //    }
    //  },
    //  plotOptions: {
    //    column: {
    //      stacking: 'normal'
    //    }
    //  },
    //  series: [{
    //    name: '小张',
    //    data: [5, 3, 4, 7, 2],
    //    stack: 'male' // stack 值相同的为同一组
    //  }, {
    //    name: '小潘',
    //    data: [3, 4, 4, 2, 5],
    //    stack: 'male'
    //  }, {
    //    name: '小彭',
    //    data: [2, 5, 6, 2, 1],
    //    stack: 'female'
    //  }, {
    //    name: '小王',
    //    data: [3, 0, 4, 4, 3],
    //    stack: 'female'
    //  }]
    //}
    //var chart1 = Highcharts.chart( 'container1',option );
    //console.log(chart)
  }

}
