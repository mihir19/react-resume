import React, { Component } from "react";
import * as ui from "./ui";
import { load, createModel, train, showPredictions } from "./model";
// This is our main function. It loads the MNIST data, trains the model, and
// then shows what the model predicted on unseen test data.

export class Mnist extends Component {
	render() {
		return (
			<div class="tfjs-example-container">
				<section class="title-area">
					<h1>TensorFlow.js: Digit Recognizer with Layers</h1>
					<p class="subtitle">
						Train a model to recognize handwritten digits from the MNIST database
						using the tf.layers api.
					</p>
				</section>

				<section>
					<p class="section-head">Description</p>
					<p>
						This examples lets you train a handwritten digit recognizer using either a
						Convolutional Neural Network (also known as a ConvNet or CNN) or a Fully
						Connected Neural Network (also known as a DenseNet).
					</p>
					<p>The MNIST dataset is used as training data.</p>
				</section>

				<section>
					<p class="section-head">Training Parameters</p>
					<div>
						<label>Model Type:</label>
						<select id="model-type">
							<option>ConvNet</option>
							<option>DenseNet</option>
						</select>
					</div>

					<div>
						<label># of training epochs:</label>
						<input id="train-epochs" value="3" />
					</div>

					<button
						id="train"
						onClick={() =>
							ui.setTrainButtonCallback(async () => {
								ui.logStatus("Loading MNIST data...");
								await load();

								ui.logStatus("Creating model...");
								const model = createModel();
								model.summary();

								ui.logStatus("Starting model training...");
								await train(model, () => showPredictions(model));
							})
						}
					>
						Load Data and Train Model
					</button>
				</section>

				<section>
					<p class="section-head">Training Progress</p>
					<p id="status" />
					<p id="message" />

					<div id="stats">
						<div class="canvases">
							<label id="loss-label" />
							<div id="loss-canvas" />
						</div>
						<div class="canvases">
							<label id="accuracy-label" />
							<div id="accuracy-canvas" />
						</div>
					</div>
				</section>

				<section>
					<p class="section-head">Inference Examples</p>
					<div id="images" />
				</section>
			</div>
		);
	}
}
