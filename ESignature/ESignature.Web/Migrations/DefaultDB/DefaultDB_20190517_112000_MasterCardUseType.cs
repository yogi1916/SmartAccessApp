using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190517112000)]
    public class DefaultDB_20190517_112000_MasterCardUseType : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("MasterCardUseType")
                .WithColumn("CardUseTypeID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("CardUseTypeName").AsString(100).NotNullable();

            Insert.IntoTable("MasterCardUseType").Row(new
            {
                CardUseTypeName = "Employee"
            });
            Insert.IntoTable("MasterCardUseType").Row(new
            {
                CardUseTypeName = "Contractor"
            });
            Insert.IntoTable("MasterCardUseType").Row(new
            {
                CardUseTypeName = "Temporary"
            });
            Insert.IntoTable("MasterCardUseType").Row(new
            {
                CardUseTypeName = "SpecialFunction"
            });
            Insert.IntoTable("MasterCardUseType").Row(new
            {
                CardUseTypeName = "Visitor"
            });
            Insert.IntoTable("MasterCardUseType").Row(new
            {
                CardUseTypeName = "VIP"
            });
            Insert.IntoTable("MasterCardUseType").Row(new
            {
                CardUseTypeName = "Trainee"
            });
        }

    }
}
