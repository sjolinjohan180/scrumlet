define(['addTaskView', 'task', 'project'], function(AddTaskView, Task, Project){
	describe('A AddTaskView test suite', function(){
		//Set up a View to be used by the tests
		beforeEach(function() {
			this.addTaskView = new AddTaskView( { model: new Project } );
		});

		//AddTaskView should be defined
		it('AddTaskView should be defined', function() {
			expect(this.addTaskView).toBeDefined();
		});

		it('Should contain a Model', function(){
			expect(this.addTaskView.model).toBeDefined();
		});

		it('That model Should be an instance of Project Model', function(){
			var result = this.addTaskView.model instanceof Project;
			expect(result).toBe(true);
		});

		it('Should contain a new task instance', function(){
			expect(this.addTaskView.task).toBeDefined();
		});

		it('Should be an instance of Task model', function(){
			var result = this.addTaskView.task instanceof Task;
			expect(result).toBe(true);
		});

		it('Should append the new task to the model on Save', function(){
			var new_task = new Task({
				task_name: 'Test task',
				task_description: 'Test description'
			});

			this.addTaskView.saveTask(new_task);

			expect(this.addTaskView.model.get('tasks').length).toBe(1);
		});
	});
});