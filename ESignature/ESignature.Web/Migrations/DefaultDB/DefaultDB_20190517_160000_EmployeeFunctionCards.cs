using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190517160000)]
    public class DefaultDB_20190517_160000_EmployeeFunctionCards : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("EmployeeFunctionCards")
                 .WithColumn("EmployeeFunctionCardID").AsInt32().PrimaryKey().NotNullable().Identity()
                 .WithColumn("CardType").AsInt32()
                 .ForeignKey("FK_MasterCardType_EmployeeFunctionCards_CardTypeID", "MasterCardType", "CardTypeID")
                 .WithColumn("EmployeeMasterID").AsInt32()
                 .ForeignKey("FK_MasterCardType_EmployeeMaster_EmployeeMasterID", "EmployeeMaster", "EmployeeMasterID")
                 .WithColumn("CardNo").AsString(10).NotNullable()
                 .WithColumn("CSNNo").AsString(10).Nullable()
                 .WithColumn("CreatedDateTime").AsDateTime().NotNullable()
                 .WithColumn("MarkDeleted").AsBoolean().Nullable()
                 .WithColumn("FacilityCode").AsString(5).Nullable()
                 .WithColumn("TempFuncID").AsInt32().Nullable();                 
        }
    }
}
