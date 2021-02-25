import Caliper from './../Caliper';
import { IAgent } from './../Entities/Agent';
import { IEntity } from './../Entities/Entity';
import { IInstructor } from './../Entities/Instructor';
import { ILtiSession } from './../Entities/LtiSession';
import { IMembership } from './../Entities/Membership';
import { IOrganization } from './../Entities/Organization';
import { ISession } from './../Entities/Session';
import { ISoftwareApplication } from './../Entities/SoftwareApplication';
import { IStudent } from './../Entities/Student';
import { IUser } from './../Entities/User';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { IEvent } from './Event';
import { EventType } from './EventType';

export interface IUserDeactivatedEvent extends IEvent {
	actor: ISoftwareApplication | IUser | IInstructor;
	object: IUser | IInstructor | IStudent;
}

interface IUserDeactivatedEventParams {
	actor: ISoftwareApplication | IUser | IInstructor;
	object: IUser | IInstructor | IStudent;
	profile?: CaliperProfile;
	target?: IEntity;
	generated?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	session?: ISession;
	referrer?: IEntity;
	extensions?: Record<string, any>;
}

export function UserDeactivatedEvent(params: IUserDeactivatedEventParams): IUserDeactivatedEvent {
	return {
		['@context']: ['http://edgenuity.com/events/user-deactivated/0-0-2', 'http://purl.imsglobal.org/ctx/caliper/v1p2'],
		type: EventType.UserEvent,
		action: CaliperAction.Deactivated,
		id: Caliper.guid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(),
		...params
	};
}