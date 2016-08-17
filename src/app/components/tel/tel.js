/**
 * Created by littlestone on 16-8-17.
 */
let TelComponent = {
  templateUrl: 'app/components/tel/tel.html',
  /*template: `<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-addon" id="basic-addon2">@example.com</span>
</div>`,*/
  controller(){
    'ngInject'
    let $ctrl = this;
    $ctrl.initialPhoneNumber = '3133536767';
  }
};
export { TelComponent }