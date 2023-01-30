export interface Todo {
	id: number;
	isDone: boolean;
	todo: string;
	deadline: string;
}

export type AddTodoType = Pick<Todo, "todo" | "deadline">;

/**
animal 
 - eye
 - leg 
 - fins 
 - tail
 - fur 
 - neck 
 - scales
 - claws 

 fish (animal)
 - eye
 - scale 
 - fins 

 Dog (animal)
 - eye
 - leg
 - fur
 - tail
 - neck 

 */
