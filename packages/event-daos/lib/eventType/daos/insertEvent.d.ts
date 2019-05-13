import { EventType } from '@betobeto/event-models/lib/eventType/interfaces/EventType';
import { Option } from 'fp-ts/lib/Option';
export declare const insertEvent: (eventType: EventType) => Promise<Option<EventType>>;
