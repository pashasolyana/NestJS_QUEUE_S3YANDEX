import { OnQueueActive, OnQueueCompleted, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { uploadToS3 } from "src/utils/s3.utils";


@Processor('UserFiles')
export class UserFileUpload {

    @Process('imageToS3')
    async handleFileUpload(job: Job){
        const {file} = job.data;
        await uploadToS3(file);
    }

    @OnQueueActive()
    onActive(job: Job){
        console.log(
            `Processing job ${job.id} of type ${job.name} with data ${job.data}`
        )
    };

    @OnQueueCompleted()
    onCompleted(job: Job){
        console.log(
            `Job with ${job.id} completed`
        )
    };
}