import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class jobDetail {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    job_title: string

    @Column()
    job_discription: string

    @Column()
    job_category_id: number

    @Column()
    company_id: number

    @Column()
    job_type: string

    @Column()
    job_salary: number

    @Column()
    job_location: string

    @Column()
    @CreateDateColumn()
    job_posting_date: Date

    @Column()
    @CreateDateColumn()
    last_application_date: Date

    @Column()
    no_of_vacancy: number

    @Column()
    job_status: string
}