import { Tooltip } from "react-tooltip"
const TooltipIcon = ({toLink, Icon, idTooltip, contentTooltip}) => {
  return (
    <a href={toLink}>
      <Icon
        data-tooltip-id={idTooltip}
        data-tooltip-content={contentTooltip}
        data-tooltip-place="bottom"
      />
      <Tooltip id={idTooltip}/>
    </a>
  );
}

export default TooltipIcon