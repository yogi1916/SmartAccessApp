using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190517122500)]
    public class DefaultDB_20190517_122500_MasterCardActivity : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("MasterCardActivity")
                .WithColumn("CardActivityiD").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("Activity").AsString(100).NotNullable();

             Insert.IntoTable("MasterCardActivity").Row(new
             {
                 CardActivityiD = 0,
                 Activity = "Card Free"
             });
            Insert.IntoTable("MasterCardActivity").Row(new
            {
                CardActivityiD = 1,
                Activity = "Card Assigned"
            });
            Insert.IntoTable("MasterCardActivity").Row(new
            {
                CardActivityiD = 2,
                Activity = "CardRemoved from Employee"
            });
            Insert.IntoTable("MasterCardActivity").Row(new
            {
                CardActivityiD = 3,
                Activity = "Card Blocked"
            });

        }
    }
}
