import { ClientDto } from './client.dto';
export declare class MessagesController {
    getSymptoms(): {
        message: string;
    };
    getMessage(id: any): {
        message: string;
    };
    sendSymptoms(user: ClientDto): ClientDto;
}
