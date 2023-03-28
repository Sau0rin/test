using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApi.Migrations
{
    /// <inheritdoc />
    public partial class _1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "anketa",
                columns: table => new
                {
                    userName = table.Column<string>(type: "text", nullable: false),
                    fio = table.Column<string>(type: "text", nullable: true),
                    date = table.Column<string>(type: "text", nullable: true),
                    pol = table.Column<string>(type: "text", nullable: true),
                    adres = table.Column<string>(type: "text", nullable: true),
                    country = table.Column<string>(type: "text", nullable: true),
                    region = table.Column<string>(type: "text", nullable: true),
                    city = table.Column<string>(type: "text", nullable: true),
                    street = table.Column<string>(type: "text", nullable: true),
                    house = table.Column<string>(type: "text", nullable: true),
                    polisnumber = table.Column<string>(type: "text", nullable: true),
                    oms = table.Column<string>(type: "text", nullable: true),
                    phone = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_anketa", x => x.userName);
                });

            


            migrationBuilder.CreateTable(
                name: "records",
                columns: table => new
                {
                    fio = table.Column<string>(type: "text", nullable: false),
                    doctorname = table.Column<string>(type: "text", nullable: true),
                    date = table.Column<string>(type: "text", nullable: true),
                    pol = table.Column<string>(type: "text", nullable: true),
                    adres = table.Column<string>(type: "text", nullable: true),
                    country = table.Column<string>(type: "text", nullable: true),
                    region = table.Column<string>(type: "text", nullable: true),
                    city = table.Column<string>(type: "text", nullable: true),
                    street = table.Column<string>(type: "text", nullable: true),
                    house = table.Column<string>(type: "text", nullable: true),
                    polisnumber = table.Column<string>(type: "text", nullable: true),
                    oms = table.Column<string>(type: "text", nullable: true),
                    phone = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_records", x => x.fio);
                });

           
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "anketa");

          

            migrationBuilder.DropTable(
                name: "records");

          
        }
    }
}
