import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-circle-progress",
  styleUrl: "my-circle-progress.css",
  shadow: true
})
export class MyCircleProgress {
  @Prop() progressAmount: string = "20";
  @Prop() progressColor: string = "#2ecc71";

  render() {
    return (
      <div
        style={{
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `conic-gradient(${this.progressColor} ${this.progressAmount}%, 0, #ecf0f1 ${(
            100 - parseInt(this.progressAmount)
          ).toString()}%)`,
          borderRadius: `50%`
        }}
      >
        <div>
          <span>
            {this.progressAmount}
          </span>
        </div>
      </div>
    );
  }
}