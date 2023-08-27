import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { Widget } from '@lumino/widgets';
export interface ILifeWatchVRE {
    widget: Widget;
}
declare const _default: JupyterFrontEndPlugin<ILifeWatchVRE, JupyterFrontEnd.IShell, "desktop" | "mobile">;
export default _default;
