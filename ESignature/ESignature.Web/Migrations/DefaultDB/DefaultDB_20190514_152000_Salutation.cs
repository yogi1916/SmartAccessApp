using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190514152000)]
    public class DefaultDB_20190514_152000_Salutation : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("Salutation")
                .WithColumn("SalutationID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("SalutationName").AsString(100).NotNullable();

            Insert.IntoTable("Salutation").Row(new
            {
                SalutationName = "Mr."
            });
            Insert.IntoTable("Salutation").Row(new
            {
                SalutationName = "Mrs."
            });
            Insert.IntoTable("Salutation").Row(new
            {
                SalutationName = "Miss."
            });
            Insert.IntoTable("Salutation").Row(new
            {
                SalutationName = "Dr."
            });
            Insert.IntoTable("Salutation").Row(new
            {
                SalutationName = "Proff."
            });
        }
    }
}