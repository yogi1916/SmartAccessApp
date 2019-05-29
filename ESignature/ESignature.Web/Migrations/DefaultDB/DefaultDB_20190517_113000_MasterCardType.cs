using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190517113000)]
    public class DefaultDB_20190517_113000_MasterCardType : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("MasterCardType")
                .WithColumn("CardTypeID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("CardTypeName").AsString(100).NotNullable();

            Insert.IntoTable("MasterCardType").Row(new
            {
                CardTypeName = "Regular"
            });
            Insert.IntoTable("MasterCardType").Row(new
            {
                CardTypeName = "Temporary"
            });           
        }

    }
}
