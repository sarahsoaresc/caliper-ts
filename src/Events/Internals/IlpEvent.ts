import Caliper from './../../Caliper';
import { IAgent } from './../../Entities/Agent';
import { IDomain } from './../../Entities/Domain';
import { IEntity } from './../../Entities/Entity';
import { EntityType } from './../../Entities/EntityType';
import { IIndividualizedLearningPath } from './../../Entities/IndividualizedLearningPath';
import { IInstructor } from './../../Entities/Instructor';
import { ILearningObjective } from './../../Entities/LearningObjective';
import { ILesson } from './../../Entities/Lesson';
import { ILtiSession } from './../../Entities/LtiSession';
import { IMembership } from './../../Entities/Membership';
import { IOrganization } from './../../Entities/Organization';
import { ISession } from './../../Entities/Session';
import { ISoftwareApplication } from './../../Entities/SoftwareApplication';
import { IStudent } from './../../Entities/Student';
import { IUser } from './../../Entities/User';
import { ISystemIdentifier } from './../../SystemIdentifier';
import { CaliperAction } from './../CaliperAction';
import { CaliperProfile } from './../CaliperProfile';
import { IEvent } from './../Event';
import { EventType } from './../EventType';

export interface IIlpEvent extends IEvent {
	actor: IAgent | ISoftwareApplication | IUser | IInstructor | IStudent;
	object: IIlpEventIndividualizedLearningPath;
	action: CaliperAction;
}

interface IIlpEventParams {
	actor: IAgent | ISoftwareApplication | IUser | IInstructor | IStudent;
	object: IIlpEventIndividualizedLearningPath;
	action?: CaliperAction;
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

export function IlpEvent(params: IIlpEventParams): IIlpEvent {
	return {
		type: EventType.IlpEvent,
		['@context']: ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.guid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(),
		...params
	};
}

export interface IIlpEventIndividualizedLearningPath extends IIndividualizedLearningPath {
	id: string;
	student: IStudent;
	subject: string;
	state: string;
	highestGradeLevel: number;
	lowestPlacementGrade: number;
	lessons: IIlpEventLesson[];
}

interface IIlpEventIndividualizedLearningPathParams {
	id: string;
	student: IStudent;
	subject: string;
	state: string;
	highestGradeLevel: number;
	lowestPlacementGrade: number;
	lessons: IIlpEventLesson[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function IlpEvent_IndividualizedLearningPath(
	params: IIlpEventIndividualizedLearningPathParams
): IIlpEventIndividualizedLearningPath {
	return {
		type: EntityType.ILP,
		...params
	};
}

export interface IIlpEventLesson extends ILesson {
	id: string;
	gradeLevel: number;
	domainOrder: number;
	lessonOrder: number;
	domain: IDomain;
}

interface IIlpEventLessonParams {
	id: string;
	gradeLevel: number;
	domainOrder: number;
	lessonOrder: number;
	domain: IDomain;
	dateToActivate?: string;
	dateToShow?: string;
	dateToStartOn?: string;
	dateToSubmit?: string;
	maxAttempts?: number;
	maxSubmits?: number;
	maxScore?: number;
	mediaType?: string;
	isPartOf?: IEntity;
	datePublished?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function IlpEvent_Lesson(params: IIlpEventLessonParams): IIlpEventLesson {
	return {
		type: EntityType.Lesson,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}