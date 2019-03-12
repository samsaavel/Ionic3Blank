import { NgModule } from '@angular/core';
import { PipesPipe } from './pipes/pipes';
import { TestPipe } from './test/test';
@NgModule({
	declarations: [PipesPipe,
	TestPipe],
	imports: [],
	exports: [PipesPipe,
    TestPipe]
})
export class PipesModule {}
