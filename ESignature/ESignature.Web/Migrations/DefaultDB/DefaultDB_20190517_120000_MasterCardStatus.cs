using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190517120000)]
    public class DefaultDB_20190517_120000_MasterCardStatus : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("MasterCardStatus")
                .WithColumn("CardStatusID").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("CardStatus").AsString(100).NotNullable();

            Insert.IntoTable("MasterCardStatus").Row(new
            {
                CardStatusID = 0,
                CardStatus = "Free"
            });
            Insert.IntoTable("MasterCardStatus").Row(new
            {
                CardStatusID = 1,
                CardStatus = "Assigned"
            });
            Insert.IntoTable("MasterCardStatus").Row(new
            {
                CardStatusID = 2,
                CardStatus = "Temp Blocked"
            });
            Insert.IntoTable("MasterCardStatus").Row(new
            {
                CardStatusID = 3,
                CardStatus = "Available"
            });
            Insert.IntoTable("MasterCardStatus").Row(new
            {
                CardStatusID = 4,
                CardStatus = "Disable"
            });
            Insert.IntoTable("MasterCardStatus").Row(new
            {
                CardStatusID = 255,
                CardStatus = "Blocked"
            });

        }
    }
}
