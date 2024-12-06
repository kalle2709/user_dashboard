$("#tableLoader").show();
$(".table-container").addClass("loading");

fetch("http://localhost:8000/index.php")
  .then((response) => response.json())
  .then((data) => {
    window.userData = data;

    $("#userTable").DataTable({
      data: userData,
      pageLength: 5,
      scrollCollapse: false,
      columns: [
        {
          data: "name",
          title: "Name",
          orderable: true,
          searchable: true,
          render: function (data) {
            return `<span data-bs-toggle="tooltip" title="User: ${data}">${data}</span>`;
          },
        },
        {
          data: "email",
          title: "Email",
          orderable: false,
          searchable: false,
          render: function (data) {
            return `<span data-bs-toggle="tooltip" title="Email: ${data}">${data}</span>`;
          },
        },
        {
          data: "phone",
          title: "Phone",
          orderable: false,
          searchable: false,
          render: function (data) {
            return `<span data-bs-toggle="tooltip" title="Phone: ${data}">${data}</span>`;
          },
        },
      ],
      order: [[0, "asc"]],
      searching: true,
      ordering: true,
      responsive: true,
      lengthMenu: [5, 10, 25, 50],
      language: {
        search: "Search by Name:",
      },
      drawCallback: function () {
        var tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });
      },
      initComplete: function () {
        $("#tableLoader").hide();
        $(".table-container").removeClass("loading");
      },
    });

    $("#userCount").text(userData.length);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
    alert("Failed to load user data");
  });
