using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190521134000)]
    public class DefaultDB_20190521_134000_CommunicationTypes : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("CommunicationTypes")
                .WithColumn("CommunicationTypeID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("CommunicationTypeName").AsString(100).NotNullable();

            Insert.IntoTable("CommunicationTypes").Row(new
            {
                CommunicationTypeName = "TCP/IP"
            });
            Insert.IntoTable("CommunicationTypes").Row(new
            {
                CommunicationTypeName = "UDP"
            });
         
        }

    }
}
