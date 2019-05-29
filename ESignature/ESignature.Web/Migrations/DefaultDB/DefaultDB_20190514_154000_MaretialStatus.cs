using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190514154000)]
    public class DefaultDB_20190514_154000_MaretialStatus : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("MaretialStatus")
                 .WithColumn("MaretialStatusID").AsInt32().PrimaryKey().NotNullable().Identity()
                 .WithColumn("MaretialStatusName").AsString(100).NotNullable();

            Insert.IntoTable("MaretialStatus").Row(new
            {
                MaretialStatusName = "Married"
            });
            Insert.IntoTable("MaretialStatus").Row(new
            {
                MaretialStatusName = "Unmarried"
            });
        }
    }
}