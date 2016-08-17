/**
 * Created by littlestone on 16-8-17.
 */
let PercentageComponent = {
  templateUrl: 'app/components/percentage/percentage.html',
  controller(){
    'ngInject'
    const rmbSign = '￥';     //人民币前缀
    const dollarSign = '$';   //美元前缀
    const percentSign = '%';  //百分号前缀

    let $ctrl = this;
    $ctrl.initialPercent = '31';
    $ctrl.prefix = dollarSign;


    $ctrl.percentCopy = +$ctrl.initialPercent;//string to number
    console.log(typeof $ctrl.initialPercent);
    console.log(typeof $ctrl.percentCopy);
    console.log($ctrl.percentCopy);
    /**
     *
     * @param ipt 输入框的值
     */
    $ctrl.modifyInput = (ipt) => {
      if(ipt.length > 0){
        $ctrl.initialPercent = dollarSign + ipt;
        $ctrl.data = + $ctrl.initialPercent.substring(1,$ctrl.initialPercent.length+1);
        console.log($ctrl.initialPercent);
        console.log(typeof $ctrl.data);
      }
    }
  }
};
export { PercentageComponent }