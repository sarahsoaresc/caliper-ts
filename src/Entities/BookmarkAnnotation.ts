import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAnnotation } from './Annotation';
import { IDigitalResource } from './DigitalResource';
import { EntityType } from './EntityType';
import { IPerson } from './Person';

export interface IBookmarkAnnotation extends IAnnotation {
	id: string;
	bookmarkNotes?: string;
}

interface IBookmarkAnnotationParams {
	id: string;
	bookmarkNotes?: string;
	annotator?: IPerson;
	annotated?: IDigitalResource;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function BookmarkAnnotation(params: IBookmarkAnnotationParams): IBookmarkAnnotation {
	return {
		type: EntityType.BookmarkAnnotation,
		...params
	};
}