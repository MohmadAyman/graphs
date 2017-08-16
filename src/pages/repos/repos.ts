import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ReposPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-repos",
  templateUrl: "repos.html"
})
export class ReposPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReposPage");
  }

  // d3.json('linedata.json', function(data) {
  //   nv.addGraph(function() {
  //     var chart = nv.models.cumulativeLineChart()
  //                   .x(function(d) { return d[0] })
  //                   .y(function(d) { return d[1]/100 }) //adjusting, 100% is 1.00, not 100 as it is in the data
  //                   .color(d3.scale.category10().range())
  //                   .useInteractiveGuideline(true)
  //                   ;

  //     chart.xAxis
  //         .tickValues([1078030800000,1122782400000,1167541200000,1251691200000])
  //         .tickFormat(function(d) {
  //             return d3.time.format('%x')(new Date(d))
  //           });

  //     chart.yAxis
  //         .tickFormat(d3.format(',.1%'));

  //     d3.select('#chart svg')
  //         .datum(data)
  //         .call(chart);

  //     //TODO: Figure out a good way to do this automatically
  //     nv.utils.windowResize(chart.update);

  //     return chart;
  //   });
  // });
}
