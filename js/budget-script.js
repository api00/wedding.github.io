var counter = 1;
jQuery('a.add-item').click(function(event){
    event.preventDefault();
    counter++;
    var newRow = jQuery('<tr id="'+counter+'_line"><td><input type="text" class="form-control" ' +
        counter + '"/></td><td><input type="text" class="form-control" ' +
        counter + '"/></td><td><input type="text" class="form-control" ' +
        counter + '"/></td><td><input type="text" class="form-control" ' +
        counter + '"/></td><td><input type="text" class="form-control" ' +
        counter + '"/></td><td><a href="#" class="btn-edit">Save</a><a href="javascript:void(0);" class="btn-delete" onclick="removeline('+counter+');"> Delete</a> </td></tr>');
    jQuery('table.ceremony').append(newRow);
});
function removeline(id)
{
  jQuery("#"+id+"_line").remove();
}

