import React, { useMemo } from 'react';
import { Theme, useMediaQuery } from '@mui/material';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { WorkItemProps, WorkItem } from '@showoff/design.widgets.work-item';
import { History as HistoryEntity, sampleHistories } from '@showoff/personal-portfolio.entities.history';


export type HistoryProps = {
  history: HistoryEntity[]
};

export function History({ history = sampleHistories }: HistoryProps) {
  const smDown = useMediaQuery((theme: Theme) => theme?.breakpoints.down('sm'));

  const workItems: WorkItemProps[] = useMemo(() => history.map((historyItem) => ({
    size: historyItem.yearsOfExperience as any,
    company: historyItem.company,
    designation: historyItem.designation,
    period: historyItem.period
  })), [history]);

  return (
    <>
      {workItems.map((workItem) => (
        <Margin
          key={`${workItem.company}#${workItem.designation}`}
          mb={MarginType.SMALL}
        >
          <WorkItem {...workItem}
            {...smDown && {
              size: 10,
            }}
          />
        </Margin>
      ))}
    </>
  );
}
