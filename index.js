$(document).ready(function() {
    // Add new row to the table
    $('#myForm').submit(function(e) {
      e.preventDefault();

      var position = $('#positionInput').val();
      var name = $('#nameInput').val();
      var id = $('#idInput').val();
      var start = $('#start-dateInput').val();

      var newRow = '<tr><td>' + position + '</td><td>' + name + '</td><td>' + id + '</td><td>' + start + '</td><td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td></tr>';
      $('#tableBody').append(newRow);

      // Clear the form inputs
      $('#positionInput').val('');
      $('#nameInput').val('');
      $('#idInput').val('');
      $('#start-dateInput').val('');
    });

    // Delete row from the table
    $('#tableBody').on('click', '.delete-btn', function() {
      $(this).closest('tr').remove();
    });
  });