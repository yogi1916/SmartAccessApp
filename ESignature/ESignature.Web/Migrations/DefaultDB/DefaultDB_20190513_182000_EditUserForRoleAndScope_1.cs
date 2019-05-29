using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190513182000)]
    public class DefaultDB_20190513_182000_EditUserForRoleAndScope_1 : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Roles")
                .AddColumn("CompnayMasterID").AsInt32().Nullable()
                 .ForeignKey("FK_Roles_CompanyMasterID", "CompanyMaster", "CompanyMasterID")
                .AddColumn("Locations").AsString().Nullable();
        }
    }
}