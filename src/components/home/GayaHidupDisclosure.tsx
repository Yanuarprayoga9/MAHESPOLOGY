import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { BiDownArrow } from 'react-icons/bi';
import { gayaHidupMateriType } from '../../data/materi';


export function GayaHidupDisclosure({materis}:{materis:gayaHidupMateriType[]}) {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5">
        {materis.map((mt,i) => (
          <Disclosure as="div" className="p-6 " defaultOpen={i == 0}>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                {mt.title}
              </span>
              <BiDownArrow className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
              {mt.desc}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
