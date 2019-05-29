using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190513180600)]
    public class DefaultDB_20190513_180600_EditUserForRoleAndScope : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AddColumn("CompnayMasterID").AsInt32().Nullable()
                 .ForeignKey("FK_CompanyMaster_CompanyMasterID", "CompanyMaster", "CompanyMasterID")
                .AddColumn("Locations").AsString().Nullable();
        }
    }
}