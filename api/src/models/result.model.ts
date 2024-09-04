import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  // tableName: Result.Result_TABLE_NAME,
  tableName: "result",
})
export class Result extends Model<Result> {
  @Column({
    type: DataType.STRING,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string | undefined;

  @Column({
    type: DataType.STRING,
  })
  status: string | undefined;

  @Column({
    type: DataType.STRING,
  })
  repositoryName: string | undefined;

  @Column({
    type: DataType.STRING,
  })
  findings: string | undefined;
}
