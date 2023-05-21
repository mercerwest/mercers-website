window.onload = function() {
    var date = new Date();
    var formattedDate = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date').innerHTML = "Last updated on " + formattedDate;
};