import { JsonLdContextVersion } from '../../config/config';
import '../../test/toEqualFixture';
import { createCourseSection } from '../agent/courseSection';
import { createPerson } from '../agent/person';
import { EntityType } from '../entityType';
import { createAssessment } from './assessment';
import { createAssessmentItem } from './assessmentItem';
import { createAssignableDigitalResource } from './assignableDigitalResource';
import { createAttempt } from './attempt';
import { createDigitalResource } from './digitalResource';
import { createDigitalResourceCollection } from './digitalResourceCollection';
import { createLearningObjective } from './learningObjective';

const versions = Object.values(JsonLdContextVersion).filter(version => version !== JsonLdContextVersion.none);

describe('Resource Entities', () => {
	versions.forEach(version => {
		describe(version, () => {
			it('assessment entity matches expected json', () => {
				const assessment = createAssessment(
					{
						dateCreated: '2016-08-01T06:00:00.000Z',
						dateModified: '2016-09-02T11:30:00.000Z',
						datePublished: '2016-08-15T09:30:00.000Z',
						dateToActivate: '2016-08-16T05:00:00.000Z',
						dateToShow: '2016-08-16T05:00:00.000Z',
						dateToStartOn: '2016-08-16T05:00:00.000Z',
						dateToSubmit: '2016-09-28T11:59:59.000Z',
						id: 'https://example.edu/terms/201601/courses/7/sections/1/assess/1',
						items: [
							createAssessmentItem({ id: 'https://example.edu/terms/201601/courses/7/sections/1/assess/1/items/1' }),
							createAssessmentItem({ id: 'https://example.edu/terms/201601/courses/7/sections/1/assess/1/items/2' }),
							createAssessmentItem({ id: 'https://example.edu/terms/201601/courses/7/sections/1/assess/1/items/3' })
						],
						maxAttempts: 2,
						maxScore: 15,
						maxSubmits: 2,
						name: 'Quiz One',
						version: '1.0'
					},
					version
				);

				expect(assessment).toEqualEntityFixture(EntityType.Assessment, version);
			});

			it('assignableDigitalResource entity matches expected json', () => {
				const assignableDigitalResource = createAssignableDigitalResource(
					{
						dateCreated: '2016-11-01T06:00:00.000Z',
						dateToActivate: '2016-11-10T11:59:59.000Z',
						dateToShow: '2016-11-10T11:59:59.000Z',
						dateToStartOn: '2016-11-10T11:59:59.000Z',
						dateToSubmit: '2016-11-14T11:59:59.000Z',
						description: "3-5 page reflection on this week's assigned readings.",
						id: 'https://example.edu/terms/201601/courses/7/sections/1/assign/2',
						maxAttempts: 2,
						maxScore: 50,
						maxSubmits: 2,
						name: 'Week 9 Reflection',
						storageName: 'assignment-2.pdf'
					},
					version
				);

				expect(assignableDigitalResource).toEqualEntityFixture(EntityType.AssignableDigitalResource, version);
			});

			it('learningObjective entity matches expected json', () => {
				const assignableDigitalResource =
					version !== JsonLdContextVersion.v1p2
						? createAssignableDigitalResource(
								{
									dateCreated: '2016-11-01T06:00:00.000Z',
									dateToActivate: '2016-11-10T11:59:59.000Z',
									dateToShow: '2016-11-10T11:59:59.000Z',
									dateToStartOn: '2016-11-15T11:59:59.000Z',
									dateToSubmit: '2016-11-14T11:59:59.000Z',
									description:
										'Choose a learning activity and describe the actions, entities and events that comprise it.',
									id: 'https://example.edu/terms/201601/courses/7/sections/1/assign/2',
									maxAttempts: 2,
									maxScore: 50,
									maxSubmits: 2,
									name: 'Caliper Profile Design',
									learningObjectives: [
										createLearningObjective(
											{
												dateCreated: '2016-08-01T06:00:00.000Z',
												description: 'Demonstrate ability to model a learning activity as a Caliper profile.',
												id: 'https://example.edu/terms/201601/courses/7/sections/1/objectives/1',
												name: 'Research techniques'
											},
											JsonLdContextVersion.none
										)
									]
								},
								version
						  )
						: createLearningObjective(
								{
									id: 'https://example.edu/terms/201601/courses/7/sections/1/objectives/1',
									name: 'Research techniques',
									description: 'Demonstrate ability to model a learning activity as a Caliper profile.',
									dateCreated: '2016-08-01T06:00:00.000Z'
								},
								version
						  );

				expect(assignableDigitalResource).toEqualEntityFixture(EntityType.LearningObjective, version);
			});

			it('digitalResource entity matches expected json', () => {
				const digitalResource = createDigitalResource(
					{
						dateCreated: '2016-08-02T11:32:00.000Z',
						id: 'https://example.edu/terms/201601/courses/7/sections/1/resources/1/syllabus.pdf',
						creators: [createPerson({ id: 'https://example.edu/users/223344' }, JsonLdContextVersion.none)],
						mediaType: 'application/pdf',
						name: 'Course Syllabus',
						isPartOf: createDigitalResourceCollection(
							{
								id: 'https://example.edu/terms/201601/courses/7/sections/1/resources/1',
								name: 'Course Assets',
								isPartOf: createCourseSection(
									{ id: 'https://example.edu/terms/201601/courses/7/sections/1' },
									JsonLdContextVersion.none
								)
							},
							JsonLdContextVersion.none
						),
						storageName: 'fall-2016-syllabus.pdf'
					},
					version
				);

				expect(digitalResource).toEqualEntityFixture(EntityType.DigitalResource, version);
			});

			it('attempt entity matches expected json', () => {
				const attempt = createAttempt(
					{
						count: 1,
						dateCreated: '2016-11-15T10:05:00.000Z',
						duration: 'PT50M30S',
						endedAtTime: '2016-11-15T10:55:30.000Z',
						id: 'https://example.edu/terms/201601/courses/7/sections/1/assess/1/users/554433/attempts/1',
						startedAtTime: '2016-11-15T10:05:00.000Z',
						assignable: createAssessment(
							{
								id: 'https://example.edu/terms/201601/courses/7/sections/1/assess/1'
							},
							JsonLdContextVersion.none
						),
						assignee: createPerson({ id: 'https://example.edu/users/554433' }, JsonLdContextVersion.none)
					},
					version
				);

				expect(attempt).toEqualEntityFixture(EntityType.Attempt, version);
			});
		});
	});
});
