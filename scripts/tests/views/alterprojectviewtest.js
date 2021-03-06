// ### Project Test Suit
define(['alterProjectView', 'project', 'projectCollection'], function(AlterProjectView, Project, ProjectCollection){
	describe('A AlterProjectView test suite', function() {
				
		//Set up a View to be used by the tests
		beforeEach(function() {
			this.projectView = new AlterProjectView({
				model: new Project(),
				//Inject Test storage to the test collection
				collection: new ProjectCollection()
			});
		});

		//Clean up
		afterEach(function () {
			this.projectView.collection.each( removeOne, this );

			//Remove each project created byt the test
			function removeOne(project){
				project.destroy();
			}
		});

		//View should be defined
		it('AlterProjectView should be defined', function() {
			expect(this.projectView).toBeDefined();
		});

		//View should have a Project model
		it('AlterProjectView should have a Project Model', function() {
			expect(this.projectView.model).toBeDefined();
			expect(this.projectView.model.get('p_name')).toBe('Project name');
		});

		//View should have a collection
		it('AlterProjectView should have a collection', function() {
			expect(this.projectView.collection).toBeDefined();
		});

		//Collection should be empty
		it('AlterProjectView collection should be empty', function() {
			expect(this.projectView.collection.length).toBe(0);
		});

		//Add should add to the collection
		it('AlterProjectView addProject should add a Project to the collection', function() {
			this.projectView.addProject({
				p_name: 'test project 1',
				p_description: 'test project description'
			});

			expect(this.projectView.collection.length).toBe(1);

			this.projectView.addProject({
				p_name: 'another test project 1',
				p_description: 'another test project description'
			});

			expect(this.projectView.collection.length).toBe(2);
		});

		//Update should update a modell in the collection
		it('AlterProjectView updateProject should update a Project in the collection', function() {
			//Add two objects to the collection
			this.projectView.addProject({
				p_name: 'test project 2',
				p_description: 'test project description'
			});

			this.projectView.addProject({
				p_name: 'another test project 2',
				p_description: 'another test project description'
			});

			//Get the first project
			var proj = this.projectView.collection.at(1);

			//Update it
			this.projectView.updateProject({
				id: proj.id,
				p_name: 'new name',
				p_description: 'test project description'
			});

			expect(this.projectView.collection.length).toBe(2);
		});
	});
});